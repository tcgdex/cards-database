import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミツハニー",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'ja-jp': "集めた ミツを 住処に 運ぶ。 夜には たくさんの ミツハニーが 重なって ハチの巣になり 眠る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ビーマーチ" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の山札にある「ミツハニー」を3枚まで、ベンチに出す。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558836,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [415],
};

export default card;
