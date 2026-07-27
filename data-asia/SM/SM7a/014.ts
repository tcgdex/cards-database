import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "ビクティニが 無限に 生み出す エネルギーを 分け与えてもらうと 全身に パワーが あふれ出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "Vビート" },
			damage: "20×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "自分の場のたねポケモンの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558902,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [494],
};

export default card;
