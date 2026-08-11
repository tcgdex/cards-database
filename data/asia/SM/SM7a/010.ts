import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ファイヤー",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "伝説の とりポケモンの １匹。 ファイヤーが 姿を 見せると 春が 訪れると 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "アシストヒーター" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "のぞむなら、自分の手札にある[炎]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
		{
			name: { ja: "ほのおのつばさ" },
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558898,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [146],
};

export default card;
