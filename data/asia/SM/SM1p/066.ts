import { Card } from "models/database/card";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ふしぎなアメ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のたねポケモン1匹から進化する1進化の上の2進化ポケモンを、手札から1枚選び、そのたねポケモンにのせて進化させる。[最初の自分の番と、この番出したばかりのたねポケモンには使えない。]",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561594,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
