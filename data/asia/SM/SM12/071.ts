import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャラランガ",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		ja: "獲物を 仕留めて 遠吠えすると あちこちから 仲間が 祝福する 金属音が こだまする。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ちからのさけび" },
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "スケイルアッパー" },
			damage: "90+",
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "のぞむなら、このポケモンについている「ポケモンのどうぐ」を、トラッシュする。その場合、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554957,
			},
		},
	],

	evolveFrom: {
		ja: "ジャランゴ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [784],
};

export default card;
