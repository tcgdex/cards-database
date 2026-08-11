import { Card } from "models/database/card";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジヘッド",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'ja-jp': "２つの 頭は 仲が 悪く 相手より 多く 食べることで 主導権を 握ろうと する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ずつき" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
		{
			name: { ja: "ダブルアタック" },
			damage: "60×",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560277,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "モノズ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [634],
};

export default card;
