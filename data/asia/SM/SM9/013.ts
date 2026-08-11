import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "口から 灼熱の 炎を 吐き出すとき 尻尾の 先は より 赤く 激しく 燃え上がる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たけるとうき" },
			effect: {
				ja: "自分の番に1回使える。このポケモンにダメカンを2個のせる。その後、自分の山札にある[炎]エネルギーを2枚まで、このポケモンにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "れんぞくブレイズボール" },
			damage: "30+",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーをすべてトラッシュし、その枚数x50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558291,
			},
		},
	],

	evolveFrom: {
		ja: "リザード",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [6],
};

export default card;
