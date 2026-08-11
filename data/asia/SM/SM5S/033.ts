import { Card } from "models/database/card";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラダグトリオ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "大地の 女神たちの 化身と 考えられ アローラ地方では とても 大切に されている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゴールドラッシュ" },
			damage: "30×",
			cost: [],
			effect: {
				'ja-jp': "自分の手札にある[鋼]エネルギーを好きなだけトラッシュし、その枚数x30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559987,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アローラディグダ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [51],
};

export default card;
