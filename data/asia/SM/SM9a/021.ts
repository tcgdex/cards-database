import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウパー",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "冷たい 水の中で 生活。 あたりが 涼しくなると エサを 探しに 地上にも 現れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どろばくだん" },
			damage: 30,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558208,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [194],
};

export default card;
