import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "翼と 尾羽を 広げて 赤く 輝くとき 生き物の 命を 吸い取る 伝説の ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひるがえす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "デスウイング" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある[悪]エネルギーを1枚、ベンチポケモンにつける。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560213,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [717],
};

export default card;
