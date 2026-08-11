import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターミー",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "輝く コアから 謎の 電波を 送受信 していると いう。 近づくと 頭痛が することも。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エスケープ" },
			effect: {
				'ja-jp': "自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かいてんアタック" },
			damage: 40,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560322,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒトデマン",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [121],
};

export default card;
