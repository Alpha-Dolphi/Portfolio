import preview0 from "../../assets/BooksSearch.png";
import preview1 from "../../assets/adminpage.png";
import preview2 from "../../assets/shop_admin_preview.png";
import preview3 from "../../assets/etch-a-sketch-preview.png";
import preview4 from "../../assets/calculator_preview.png";

const projectsData = [
  {
    hrefGit: "https://github.com/Alpha-Dolphi/Caseguru-test-task",
    hrefLive: "https://candid-mousse-31b9c0.netlify.app/",
    title: "Books Search",
    description:
      "Books Search — это проект на React c использованием TypeScript, в котором реализован поиск книг с помощью Google Books API и хранилища MobX. Я реализовал поиск с несколькими параметрами сортировки по категориям, книги представлены ввиде карточек и каждая из них имеет собственную страницу с более подробной информацией. Благодаря этому проекту я закрепил теоритические знания TypeScript и освоил MobX.",
    imageUrl: preview0,
    altName: "Books Search",
    id: "39724235",
  },
  {
    hrefGit: "https://github.com/Alpha-Dolphi/Test-Task-Admin-Page",
    hrefLive: "https://euphonious-pie-d8ef9f.netlify.app/",
    title: "Admin Page",
    description:
      "Admin Page — это проект на React, в котором исполнены CRUD-операции с помощью Redux Toolkit. На странице представлены три сущности: Posts, Albums и Todos. Я реализовал динамическую пагинацию в разделе Альбомы и осуществил drag n drop между двумя колонками в разделе Todos. Этот проект позволил мне разобраться в особенностях React, освоиться с Redux Toolkit и отработать навыки настройки Webpack. Это был крайне полезный опыт.",
    imageUrl: preview1,
    altName: "Admin Page",
    id: "14324235",
  },
  {
    hrefGit: "https://github.com/Alpha-Dolphi/project-structure",
    hrefLive: "https://silly-faun-a5d4a0.netlify.app/",
    title: "Shop Admin",
    description:
      "Shop Admin — это финальный проект по курсу JavaScript, написанный исключительно на нём. Для меня это была отличная возможность проверить на практике все, чему я научился на протяжении курса, и продемонстрировать свои способности. Все компоненты проекта основаны на классах, что стало для меня достаточно интересным испытанием. Я усердно работал над этим проектом и горжусь конечным результатом.",
    imageUrl: preview2,
    altName: "Shop Admin",
    id: "476397834",
  },
  {
    hrefGit: "https://github.com/Alpha-Dolphi/Etch-a-sketch",
    hrefLive: "https://alpha-dolphi.github.io/Etch-a-sketch/",
    title: "Sketch",
    description:
      "Этот проект представляет собой интерактивную цифровую версию классической игрушки Etch A Sketch, созданную с использованием JavaScript, а простыми словами — обычная рисовалка, которая имеет ряд возможностей настройки: изменение цвета кисти и фона, использование ластика, очистку полотна, а также опцию радужной кисти. Это был веселый и творческий способ попрактиковаться в JavaScript и создать что-то необычное.",
    imageUrl: preview3,
    altName: "Etch A Sketch",
    id: "23447631",
  },
  {
    hrefGit: "https://github.com/Alpha-Dolphi/Calculator",
    hrefLive: "https://alpha-dolphi.github.io/Calculator/",
    title: "Calculator",
    description:
      "Это мой первый проект на JavaScript, полнофункциональный онлайн-калькулятор. Он позволяет пользователям выполнять ряд математических операций, включая сложение, вычитание, умножение и деление, а также остаток от деления. Проект стал отличной возможностью сделать первый шаг в изучении JavaScript и помог мне освоить различные методы обработки массивов.",
    imageUrl: preview4,
    altName: "Calculator",
    id: "47634977634",
  },
];

export default projectsData;
