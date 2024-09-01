import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async saveLocation(userId: number, latitude: number, longitude: number) {
    const location = new Location();
    location.userId = userId;
    location.latitude = latitude;
    location.longitude = longitude;
    return this.locationRepository.save(location);
  }

  async getLocations(userId: number) {
    return this.locationRepository.find({ where: { userId } });
  }
}
