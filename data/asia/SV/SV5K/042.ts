import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イダイナキバ",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "近年 目撃例が ある。 イダイナキバという 名は ある本に 記された 生物から 取られた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じばんほうかい" },
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の山札を上から1枚トラッシュする。この番、手札から「古代」のサポートを出して使っていたなら、さらに3枚トラッシュする。",
			},
		},
		{
			name: { ja: "きょだいなキバ" },
			damage: 160,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752807,
				tcgplayer: 568376,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [984],
};

export default card;
