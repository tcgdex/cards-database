import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "カイオーガ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "大雨と 大津波で 海を 広げた 神話の ポケモン。 グラードンと 激しく 戦った。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みちしお" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある[水]エネルギーを2枚、自分のポケモン1匹につける。",
			},
		},
		{
			name: { ja: "うずまくなみ" },
			damage: 130,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 556612,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [382],
};

export default card;
