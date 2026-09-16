import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "人の 言葉を 理解する 高い 知能を持ち 背中に 人を乗せて 海を泳ぐのが 好きな ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のせておよぐ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "れいとうビーム" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908189,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [131],
};

export default card;
