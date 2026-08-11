import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒバニー",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "走りまわって 体温を 上げると 炎エネルギーが 体を 巡り 本来の 力を 発揮できる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおでこがす" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463084,
				tcgplayer: 597254,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [813],
};

export default card;
