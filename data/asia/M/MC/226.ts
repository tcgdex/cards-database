import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライチュウ",
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気が 溜まってくると 筋肉が 刺激され いつもより 攻撃的に なってしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "クイックアタック" },
			damage: "20+",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "ストロングボルト" },
			damage: 150,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[L]エネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863522,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [26],
};

export default card;
