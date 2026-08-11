import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤドキング",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "噛まれた 毒素の 影響で 天才的 頭脳の 持ち主に。 サイコパワーを 自在に 操る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ながれつく" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "まるごし" },
			damage: 110,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "このワザは、自分の手札が1枚もないなら、このワザに必要なエネルギーがこのポケモンについていなくても、使える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561238,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤドン",
	},

	retreat: 2,
	rarity: "None",
	dexId: [199],
};

export default card;
