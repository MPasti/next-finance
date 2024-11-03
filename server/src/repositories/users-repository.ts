export abstract class UsersRepository {
  abstract create(
    username: string,
    email: string,
    password: string,
  ): Promise<void>;
}
