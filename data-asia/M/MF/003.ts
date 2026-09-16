import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "チェリム",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "太陽の 光を 浴びて 元気いっぱいの 姿。 日暮れまでは 活発だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "エナジーギフト" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "このは" },
			damage: 50,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908365,
			},
		},
	],

	evolveFrom: {
		ja: "チェリンボ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [421],
};

export default card;
