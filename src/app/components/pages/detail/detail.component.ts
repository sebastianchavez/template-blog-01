import { Component } from '@angular/core';
import { IPost } from 'src/app/models/interfaces/post.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  post: IPost = {
    categoryId: 0,
    title: 'Título publicación',
    description: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, veniam! Facere fuga aspernatur eaque a! Modi magnam eos, ratione, qui pariatur porro quis alias at nisi voluptatum optio! Excepturi in quidem quae autem. Animi nam voluptatem tempore atque placeat. Neque adipisci aut eos rem consequuntur unde, quisquam quod delectus repudiandae? Temporibus corrupti in at iure ipsa tempora tenetur, deleniti, quam repudiandae quo harum illo, magni veritatis laudantium blanditiis porro quidem aliquam libero cum nemo natus cumque fuga molestias! Dolores tenetur tempore, iusto dicta.

    officiis id mollitia deleniti, odio eius nisi ipsum nostrum expedita eveniet, provident minima exercitationem quasi totam officia adipisci consequuntur! Totam, porro fuga cum, dolorum voluptatem ipsum dicta accusamus, voluptatum nisi molestiae facere corrupti libero. Aperiam dolore amet id esse rerum nostrum similique? Adipisci minima animi sapiente ad. Quasi suscipit commodi cupiditate? Debitis, impedit architecto omnis quis aspernatur at repudiandae ipsa natus eos molestiae? Modi facere corporis odio, repudiandae similique repellendus rerum labore! At fuga consectetur rem explicabo,
    
     laboriosam, beatae praesentium ex ut incidunt ipsam repellendus velit enim necessitatibus cum blanditiis ullam adipisci! Fugiat neque quam minus beatae. Iure, impedit perferendis nemo iste sequi animi adipisci delectus harum inventore, sit deleniti vero deserunt aperiam reiciendis quidem quo commodi laborum nobis fugiat magni saepe, ut non explicabo! Est dolor ducimus officiis quia veniam, consectetur doloribus ea velit minus et? Quae quas soluta doloribus. Cupiditate asperiores temporibus ullam quasi distinctio corrupti accusantium voluptatum, illum totam eum eius quas culpa at! Tempora rem at facilis fugiat, sapiente ratione qui ad repellendus distinctio ipsa unde repellat dolore quasi facere! Pariatur veritatis, quae aliquid explicabo natus dolorem dolore dolorum eligendi ut vero repellat voluptate tempora suscipit! Qui eum asperiores dolorem est harum eligendi delectus! Velit consequatur, unde praesentium harum in ut quos soluta fugit alias tempore inventore quod quo repudiandae iste dolor nam minima asperiores! Itaque, fugiat modi? Incidunt quisquam dicta impedit mollitia, dolores et sunt, deserunt minus porro, vero aliquid provident officia corporis! Sed delectus 
    `,
    file: '',
    image: 'assets/imgs/category01.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
    category: 'Taller literario'
  }
}
