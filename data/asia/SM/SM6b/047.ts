import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ノコッチ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'ja-jp': "尻尾で 地面を 掘って 迷路のような 巣穴を 作る。 羽で 少しだけ 飛べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "よんでにげる" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にあるたねポケモンを3枚まで、ベンチに出す。そして山札を切る。ベンチに出した場合、のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "スネークフラッシュ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559197,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [206],
};

export default card;
