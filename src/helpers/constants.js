import deedsdao0 from '../assets/dev/deedsdao.png';
import deedsdao1 from '../assets/dev/deedsdao1.png';
import deedsdao2 from '../assets/dev/deedsdao2.png';
import design01 from "../assets/designs/01.jpg";
import design02 from "../assets/designs/02.jpg";
import design03 from "../assets/designs/03.jpg";
import design04 from "../assets/designs/04.jpg";
import design05 from "../assets/designs/05.jpg";
import design06 from "../assets/designs/06.jpg";
import design07 from "../assets/designs/07.jpg";
import design08 from "../assets/designs/08.jpg";
import design09 from "../assets/designs/09.jpg";
import design10 from "../assets/designs/10.jpg";
import fishtank0 from '../assets/dev/fishtank.jpg';
import fishtank1 from '../assets/dev/fishtank1.png';
import fishtank2 from '../assets/dev/fishtank2.png';
import noxx0 from '../assets/dev/noxx.jpg';
import noxx1 from '../assets/dev/noxx1.png';
import noxx2 from '../assets/dev/noxx2.png';
import parashift0 from '../assets/dev/parashift.webp';
import parashift1 from '../assets/dev/parashift1.png';
import parashift2 from '../assets/dev/parashift2.png';
import redstruss0 from '../assets/dev/red-struss.jpg';
import redstruss1 from '../assets/dev/red-struss1.png';
import redstruss2 from '../assets/dev/red-struss2.png';

export const projectImages = {
  redstuss: [redstruss0, redstruss1, redstruss2],
  noxx: [noxx0, noxx1, noxx2],
  fishtank: [fishtank0, fishtank1, fishtank2],
  deedsdao: [deedsdao0, deedsdao1, deedsdao2],
  parashift: [parashift0, parashift1, parashift2],
};

export const designs = [
    { title: 'Cover of a school project (package design, school project)', client: 'BBBaden', src: design01 },
    { title: 'Photo manipulation (school project)', client: 'AGS BS', src: design02 },
    { title: 'Birthday poster for my sister', client: 'Nora Weber', src: design03 },
    { title: 'Fictional advertising of a fragrance spray (school project)', client: 'AGS BS', src: design04 },
    { title: 'Cover of a school project (sports nutrition, school project)', client: 'BBBaden', src: design05 },
    { title: 'X-Mas card 2012', client: 'various people', src: design06 },
    { title: 'Banner for a logo', client: 'mindflow', src: design07 },
    { title: 'Birthday flyer', client: 'Ivo Schoenholzer', src: design08 },
    { title: 'X-Mas card 2011', client: 'various people', src: design09 },
    { title: 'Logo competition (won #1 place)', client: 'IchWillParty', src: design10 }
  ];
  
  export const dev = [
    {
      title: "DeedsDAO",
      thumbnail: projectImages.deedsdao[0],
      images:  projectImages.deedsdao.slice(1),
      description: "Design and Implementation",
      year: "2022",
      more: true,
      url: "https://dorahacks.io/buidl/2462"
    },
    {
      title: "Parashift AG",
      thumbnail: projectImages.parashift[0],
      images: projectImages.parashift.slice(1),
      description: "Complete redesign I was fully in charge of, for a sophisticated document processing platform",
      year: "2021-2022",
      more: true,
      url: "https://support.parashift.io/manually-validate-extracted-data-extraction-validation"
    },
    {
      title: "noxx-musik.ch",
      thumbnail: projectImages.noxx[0],
      images: projectImages.noxx.slice(1),
      description: "Design and Implementation",
      year: "2021",
      url: "https://noxx-musik.ch"
    },
    {
      title: "fish-tank.io",
      thumbnail: projectImages.fishtank[0],
      images: projectImages.fishtank.slice(1),
      description: "Design and Implementation",
      year: "2021",
      url: "https://fish-tank.io"
    },
    {
      title: "red-struss",
      thumbnail: projectImages.redstuss[0],
      images: projectImages.redstuss.slice(1),
      description: "Design and Implementation",
      year: "2019",
      url: "https://red-struss.netlify.app"
    },
  ]
  