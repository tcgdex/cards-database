import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤルキモノ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "心臓の 鼓動が 速く 全身の 血が たぎっているため １秒も じっと していられない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "きりさく" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557037,
			},
		},
	],

	evolveFrom: {
		ja: "ナマケロ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [288],
};

export default card;
