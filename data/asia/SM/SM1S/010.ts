import { Card } from "models/database/card";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウインディ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'ja-jp': "東洋の 古い 言い伝え にも 登場する。 威厳に あふれ たくましくも 美しい ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 60,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ほのおのあらし" },
			damage: 190,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[炎]エネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561684,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガーディ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [59],
};

export default card;
