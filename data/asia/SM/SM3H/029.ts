import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マケンカニ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'ja-jp': "ハサミで 弱点を ガードしつつ 隙を うかがい パンチを 放つ。 負けたほうは 泡を ふいて ダウン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なぐる" },
			damage: 40,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561093,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [739],
};

export default card;
