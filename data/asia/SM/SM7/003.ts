import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュプトル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "密林に 生息する。 枝から 枝へ 飛び移りながら 移動して 獲物に 接近する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "リーフブレード" },
			damage: "20+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558964,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "キモリ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [253],
};

export default card;
