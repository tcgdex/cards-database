import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポッチャマ",
	},

	illustrator: "Tomomi Kaneko",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'ja-jp': "世話を 焼かれる ことが 大嫌い。 トレーナーの 指示を 聞かないので 仲良く なるのが 難しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バブルホールド" },
			damage: 80,
			cost: ["Water", "Water", "Water"],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたたねポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555259,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [393],
};

export default card;
