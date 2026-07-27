import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "コンパン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "小さな 目が たくさん 集まって 大きな 目に なっている。 夜になると 明かりに 集まる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "レーダーアイ" },
			cost: ["Grass"],
			effect: {
				ja: "自分の山札を上から7枚見て、その中にあるカードを1枚、手札に加える。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558188,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [48],
};

export default card;
