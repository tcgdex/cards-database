import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドキング",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "噛まれた 毒素の 影響で 天才的 頭脳の 持ち主に。 サイコパワーを 自在に 操る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ながれつく" },
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札にある好きなカードを1枚、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "まるごし" },
			damage: 110,
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "このワザは、自分の手札が1枚もないなら、このワザに必要なエネルギーがこのポケモンについていなくても、使える。",
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
		ja: "ヤドン",
	},

	retreat: 2,
	rarity: "None",
	dexId: [199],
};

export default card;
