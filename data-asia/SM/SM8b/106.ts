import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ノコッチ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "尻尾で 地面を 掘って 迷路のような 巣穴を 作る。 羽で 少しだけ 飛べる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "よんでにげる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるたねポケモンを3枚まで、ベンチに出す。そして山札を切る。ベンチに出した場合、のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "スネークフラッシュ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551026,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [206],
};

export default card;
