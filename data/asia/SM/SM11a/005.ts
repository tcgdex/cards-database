import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トロピウス",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "アローラに棲む トロピウスの 首に 実る フサは 他の 地方より 格別に 甘くて もう最高。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうごうせい" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札にある[草]エネルギーを1枚、自分のポケモンにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "リーフドレイン" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556565,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [357],
};

export default card;
