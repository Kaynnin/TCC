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
      image: '../../assets/icon/TheWirtcher.webp'
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
