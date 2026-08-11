import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ストリンダーex",
	},

	illustrator: "Anderson",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ストラムサンダー" },
			damage: 240,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 810563,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エレズン",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [849],

	suffix: "EX",
};

export default card;
