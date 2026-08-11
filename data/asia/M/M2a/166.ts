import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブレイブバングル",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモン（「ルールを持つポケモン」をのぞく）が使うワザの、相手のバトル場の「ポケモンex」へのダメージは「+30」される。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861409,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "None",
};

export default card;
