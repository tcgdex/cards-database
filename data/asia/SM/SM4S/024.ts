import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バケッチャ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "成仏できない 魂を カボチャの 体に 入れている。 日暮れと ともに 動きはじめる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560336,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [710],
};

export default card;
