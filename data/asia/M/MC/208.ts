import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ゲッコウガex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "へんげんしゅりけん" },
			damage: "100+",
			cost: ["Water", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863504,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ゲコガシラ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [658],

	suffix: "EX",
};

export default card;
