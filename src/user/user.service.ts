import { HttpService } from '@nestjs/axios/dist';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { User } from 'src/global/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async login(authCode: string): Promise<{ jwt: string }> {
    const params = {
      auth_code: authCode,
      client_id: this.configService.get<string>('IDP_CLIENT_ID'),
      client_secret_key: this.configService.get<string>(
        'IDP_CLIENT_SECRET_KEY',
      ),
    };
    const { data } = await firstValueFrom(
      this.httpService
        .get<{ jwt: string }>('https://api.idp.gistory.me/idp/get_token', {
          params,
        })
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error.response.data);
            throw new UnauthorizedException();
          }),
        ),
    );
    return data;
  }

  async registerUser(jwt: string): Promise<void> {
    return;
  }
}
