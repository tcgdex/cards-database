import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "危ない廃墟",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の番に、たねポケモン（ポケモンをのぞく）をベンチに出すたび、そのポケモンにダメカンを2個のせる。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 840358,
		tcgplayer: 647172,
	},
};

export default card;