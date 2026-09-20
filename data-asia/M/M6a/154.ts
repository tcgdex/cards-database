import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザEX",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てんのさけび" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から3枚トラッシュし、その中のエネルギーをすべて、このポケモンにつける。",
			},
		},
		{
			name: { ja: "ドラゴンバースト" },
			damage: "60×",
			cost: ["Fire", "Lightning"],
			effect: {
				ja: "このポケモンについている[R]または[L]の基本エネルギーをすべてトラッシュし、トラッシュしたエネルギーの枚数×60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Dragon", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908332,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [384],

	suffix: "EX",
};

export default card;
