import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "マナフィ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "しんそうかいりゅう" },
			cost: ["Water"],
			effect: {
				ja: "自分のトラッシュにある[水]エネルギーを5枚、相手に見せてから、山札にもどして切る。",
			},
		},
		{
			name: { ja: "みずのはどう" },
			damage: 20,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559827,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [490],
};

export default card;
