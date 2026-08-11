import { Card } from "models/database/card";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シズクモ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "餌を 求め 地上に あがる。 水泡を 被るのは 呼吸と 柔らかい 頭を 守るため。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おそいかかる" },
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561071,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [751],
};

export default card;
