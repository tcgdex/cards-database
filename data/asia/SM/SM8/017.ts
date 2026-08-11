import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒノアラシ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "臆病な 性格。 驚くと 背中の 炎が 一段と 強く 燃え上がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558656,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [155],
};

export default card;
