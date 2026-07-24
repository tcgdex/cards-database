import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "カリキリ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "日が 昇ると ４枚の 葉っぱを 広げ 日光浴。 頭の 先から いい 匂いが するよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
		{
			name: { ja: "このは" },
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557195,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [753],
};

export default card;
