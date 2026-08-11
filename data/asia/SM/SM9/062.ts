import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミニリュウ",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'ja-jp': "まだ 弱いので 水底に 身を 潜め 沈んできた ものを 食らいながら ひそかに 暮らす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りゅうのいかり" },
			damage: 60,
			cost: ["Lightning"],
			effect: {
				'ja-jp': "コインを2回投げ、1回でもウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558388,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [147],
};

export default card;
