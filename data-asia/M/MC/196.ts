import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ネオラント",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "深い 海の 底で 光る ネオラントは まるで 夜空に 輝く 星のように 見える。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "おんがえし" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引く。",
			},
		},
		{
			name: { ja: "ひれカッター" },
			damage: 70,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863492,
			},
		},
	],

	evolveFrom: {
		ja: "ケイコウオ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [457],
};

export default card;
