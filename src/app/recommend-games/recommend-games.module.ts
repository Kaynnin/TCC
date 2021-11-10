import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendGamesPageRoutingModule } from './recommend-games-routing.module';

import { RecommendGamesPage } from './recommend-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendGamesPageRoutingModule
  ],
  declarations: [RecommendGamesPage]
})
export class RecommendGamesPageModule {}
