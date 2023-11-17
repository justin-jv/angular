import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  districts = [
    {
      id:1,
      title:'Thiruvananthapuram',
      image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/fe/2b/f3/sree-padmanabhaswamy.jpg?w=500&h=400&s=1',
      desc:'Thiruvananthapuram (or Trivandrum) is the capital of the southern Indian state of Kerala. It\'s distinguished by its British colonial architecture and many art galleries.',
      
    },
    {
      id:2,
      title:'Kollam',
      image:'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg',
      desc:'Kollam is a city in the state of Kerala, on India\'s Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram.',
      
    },
    {
      id:3,
      title:'Pathanamthitta',
      image:'https://www.honeymoontourskerala.com/wp-content/uploads/2016/09/p1-1.gif',
      desc:'Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538.',
    },
    {
      id:4,
      title:'Alappuzha',
      image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f4/b0/b7/alappuzha-beach.jpg?w=700&h=500&s=1',
      desc:'Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It\'s best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons.',
    },
    {
      id:5,
      title:'Kottayam',
      image:'https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/9/5/Kottayam-railway-art.jpg',
      desc:'Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. ',
    },
    {
      id:6,
      title:'Idukki',
      image:'https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B-e1534139417729.jpg',
      desc:'Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years.',
    },
    {
      id:7,
      title:'Ernakulam',
      image:'https://spb.kerala.gov.in/sites/default/files/styles/inner_banner_image_850x460/public/2020-09/4_1.jpg?itok=QdkvH5Ma',
      desc:'Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. ',
    },
    {
      id:8,
      title:'Thrissur',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Kudamatom_at_thrissur_pooram_2013_7618.JPG/800px-Kudamatom_at_thrissur_pooram_2013_7618.JPG',
      desc:'Thrissur is a city in the south Indian state of Kerala. It\'s known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals.',
    },
    {
      id:9,
      title:'Palakkad',
      image:'https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg',
      desc:'Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival.',
    },
    {
      id:10,
      title:'Malappuram',
      image:'https://images.newindianexpress.com/uploads/user/imagelibrary/2023/7/12/w1200X800/Malappuram.jpg',
      desc:'Malappuram is a city and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala and the 20th largest in India',
    },
    {
      id:11,
      title:'Kozhikkode',
      image:'https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2021/7/1/kozhikode-beach-main.jpg',
      desc:'Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. ',
    },
    {
      id:12,
      title:'Wayanad',
      image:'https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg',
      desc:'Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. ',
    },
    {
      id:13,
      title:'Kannur',
      image:'https://www.keralatourism.org/images/enchanting_kerala/hri/kannur_fort20200908052017_1019_1.jpg',
      desc:'Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade.',
    },
    {
      id:14,
      title:'Kasargod',
      image:'https://www.keralatourism.org/images/destination/mobile/bekal_fort_kasaragod20131106153233_303_1.jpg',
      desc:'Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. ',
    },
  ]

}
