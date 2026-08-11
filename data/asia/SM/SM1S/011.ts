import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コータス",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "のしかかり" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561685,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [324],
};

export default card;
