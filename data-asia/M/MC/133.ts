import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Heisuke Kitazawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "くれないのミツを 吸った 姿。 情熱的な ステップを 踏み 激しい 炎を 巻き起こす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エネアシスト" },
			cost: ["Fire"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。",
			},
		},
		{
			name: { ja: "ひばな" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863429,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [741],
};

export default card;
