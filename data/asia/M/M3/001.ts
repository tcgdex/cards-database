import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イトマル",
	},

	illustrator: "Katsunori Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "細くて 丈夫な 糸を 張り巡らして 罠を 仕掛けると 獲物が かかるのを ひたすら待つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねばるいと" },
			damage: 10,
			cost: ["Grass"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [167],

	thirdParty: {
		cardmarket: 867915,
		tcgplayer: 674320,
	},
};

export default card;
