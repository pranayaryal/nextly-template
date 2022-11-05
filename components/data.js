import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwisndCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

// const colors= [
//   'lime', 'biscotti', 'olive', 'mint', 'pickle', 'purple',
//   'pine', '#FF007F', 'cotton candy', 'pearl', 'sand', 'vanilla',
//   'cantaloupe', 'almond', 'chestnut', 'hazelnut', 'wood', 'chocolate',
//   'brownie', 'black', 'rhino', 'smoke'
// ]

const colors= [
  'lime', '#e6d7c2', 'olive', '#3EB489', '#577047',
  '#2a2f23', 'rose', '#ffbcd9', '#E2DFD2', '#C2B280',
  '#C2B280', 'vanilla', '#FFA62F', '#EADDCA', 'chestnut',
  'hazelnut', 'wood', 'chocolate', 'brownie', 'grey',
  '#333366', 'smoke'
]

const matrix = [
  [3, 2, 10, 10, 2, 3, 13, 10, 9, 9,
   9, 9, 10, 10, 10, 9, 9, 10, 10, 10,
   10, 1, 1, 10, 1, 2, 10, 10, 11, 11,
   10, 11, 10, 1, 3, 3, 3, 3, 2, 2,
   2, 13, 2, 3, 3, 3, 3, 3, 21, 4],
  [3, 3, 13, 10, 13, 5, 2, 10, 9, 9,
   9, 10, 10, 10, 13, 1, 1, 1, 1, 1,
   1, 10, 10, 10, 2, 13, 10, 10, 13, 20,
   20, 20, 21, 21, 11, 11, 13, 1, 1, 10,
   2, 3, 3, 3, 5, 5, 5, 5, 3, 5],
  [13, 10, 10, 10, 2, 5, 2, 10, 9, 9,
   10, 10, 10, 13, 2, 3, 3, 3, 3, 3,
   3, 1, 10, 10, 11, 11, 11, 20, 20, 20,
   17, 20, 20, 21, 21, 10, 10, 10, 1, 1,
   1, 2, 3, 3, 5, 5, 5, 5, 5, 3],
  [10, 10, 10, 10, 1, 13, 10, 10, 21, 11,
   10, 11, 13, 13, 13, 2, 3, 3, 3, 3,
   3, 3, 1, 11, 11, 21, 20, 20, 20, 20,
   20, 20, 20, 20, 20, 13, 21, 21, 10, 13,
   3, 3, 3, 3, 5, 3, 3, 5, 6, 5],
  [3, 2, 2, 10, 8, 10, 10, 10, 3, 3,
   10, 11, 13, 13, 13, 2, 3, 3, 3, 3,
   3, 3, 1, 11, 11, 21, 20, 20, 20, 20,
   20, 20, 20, 20, 20, 13, 21, 21, 10, 13,
   3, 3, 3, 3, 5, 3, 3, 5, 6, 5],

]

export { benefitOne, benefitTwo, colors, matrix };
