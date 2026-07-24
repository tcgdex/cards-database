import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "生態系を 脅かす者を 圧倒的な 力を 以て 制圧する ジガルデの 姿。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ランドクラッシュ" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "コアパニッシャー" },
			damage: 150,
			cost: ["Darkness", "Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[悪]エネルギーと[妖]エネルギーを、1個ずつトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551006,
			},
		},
	],

	retreat: 4,
	rarity: "None",
	dexId: [718],
};

export default card;
