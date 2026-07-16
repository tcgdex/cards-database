import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "ビクティニが 無限に 生み出す エネルギーを 分け与えてもらうと 全身に パワーが あふれ出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "インフィニティ" },
			damage: "20×",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "自分のトラッシュにある基本エネルギーをすべて相手に見せ、その枚数x20ダメージ。その後、見せたエネルギーを山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 543496,
			},
		},
	],

	retreat: 1,
	regulationMark: "B",
	rarity: "Rare Holo",
	dexId: [494],
};

export default card;
