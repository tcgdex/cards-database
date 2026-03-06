import { Card } from "../../../interfaces";
import Set from "../SV11W";

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
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
	],

	trainerType: "Tool",
	regulationMark: "I",
	rarity: "Uncommon",
	thirdParty: {
		cardmarket: 829085,
		tcgplayer: 636635,
	},
};

export default card;
