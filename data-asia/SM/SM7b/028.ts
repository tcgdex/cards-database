import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Fairy"],

	description: {
		ja: "人や ポケモンの 感情を 敏感に キャッチ。 敵意を 感じると 物陰に 隠れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まねきよせる" },
			cost: ["Fairy"],
			effect: {
				ja: "自分のトラッシュにあるサポートを1枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "たたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558853,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [280],
};

export default card;
