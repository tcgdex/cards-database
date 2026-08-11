import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤルキモノ",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "いつも 暴れているので すぐに お腹が 空いてしまうが 食事の ときも じっとして いられない。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "スラッシュクロー" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863884,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナマケロ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [288],
};

export default card;
