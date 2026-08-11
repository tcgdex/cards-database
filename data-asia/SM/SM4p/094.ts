import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ふしぎなアメ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のたねポケモン1匹から進化する1進化の上の2進化ポケモンを、手札から1枚選び、そのたねポケモンにのせて進化させる。[最初の自分の番と、この番出したばかりのたねポケモンには使えない。]",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560127,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
