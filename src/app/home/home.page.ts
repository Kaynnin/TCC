import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  firstLine: any[] = [
    {
      image: '../../assets/icon/GTA.png'
    },
    {
      image: '../../assets/icon/Counter-Strike-Global-Offensive.jpg'
    },
    {
      image: 'https://store-images.s-microsoft.com/image/apps.65469.65858607118306853.bade8222-c0ad-4481-b2d6-b46cc0450658.7f5d79c5-b20b-4b09-9363-1190bbb9ea92'
    },
    {
      image: '../../assets/icon/LEAGUE.jpg'
    },
    {
      image: '../../assets/icon/Valorant.jpg'
    }
  ]

  secondLine: any[] = [
   {
     image: "../../assets/icon/PlayerUnknown’s.jpg"
   },
   {
    image: "../../assets/icon/minecraft.png"
  },
  {
    image: "../../assets/icon/Rainbow Six.jpg"
  },
  {
    image: "../../assets/icon/Red.jpg"
  },
  {
    image: "../../assets/icon/cyperpunk.jpeg"
  }
  ]

  constructor() {}

}
