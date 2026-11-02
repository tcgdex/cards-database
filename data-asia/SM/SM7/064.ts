import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "コモルー",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "洞穴の 奥に じっと 潜み 何も 喰わず 何も 飲まない。 なぜ 死なないのかは 不明だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いかりのやいば" },
			damage: "30+",
			cost: ["Fire", "Water"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559025,
			},
		},
	],

	evolveFrom: {
		ja: "タツベイ",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [372],
};

export default card;
