export interface DbConfig {
  type?: 'aurora-data-api';
  port?: number;
  database?: string;
  host?: string;
  username?: string;
  password?: string;
  synchronize?: boolean;
}
