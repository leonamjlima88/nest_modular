import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/book/book.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "nest",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true,
      "autoLoadEntities": true
    }),
    BookModule,
    ProductModule,
  ]
})
export class AppModule {}