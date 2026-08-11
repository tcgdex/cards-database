import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒノアラシ",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'ja-jp': "臆病な 性格。 驚くと 背中の 炎が 一段と 強く 燃え上がる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "えんまく" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558655,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [155],
};

export default card;
