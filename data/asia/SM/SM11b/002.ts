import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クサイハナ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "猛烈な クサさ！ それなのに １０００人に １人ぐらい これを 好んで かぐ 人がいる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ねむりごな" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555118,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナゾノクサ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [44],
};

export default card;
