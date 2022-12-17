import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Signin as user' };
  }

  signup() {
    return { msg: 'Sign up route' };
  }
}
