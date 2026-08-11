import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム",
	},

	illustrator: "Iwamoto05",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "炎で 世界を 燃やしつくせる 伝説の ポケモン。真実の 世界を 築く 人を 助ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 90,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863421,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [643],
};

export default card;
