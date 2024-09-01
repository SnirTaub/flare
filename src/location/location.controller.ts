import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  async saveLocation(
    @Body() body: { userId: number; latitude: number; longitude: number },
  ) {
    return this.locationService.saveLocation(
      body.userId,
      body.latitude,
      body.longitude,
    );
  }

  @Get(':userId')
  async getLocations(@Param('userId') userId: number) {
    return this.locationService.getLocations(userId);
  }
}
