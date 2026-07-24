import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポワルン たいようのすがた",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "晴れた 日の ポワルンの 姿。 ヒーターの前に 置く 実験では この 形に 変化しなかった。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こがす" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "サニーアシスト" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863398,
			},
		},
	],

	retreat: 0,
	regulationMark: "H",
	rarity: "None",
	dexId: [351],
};

export default card;
