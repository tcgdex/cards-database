import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤルキモノ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "体を 動かしていないと ストレスが たまりすぎて 具合が 悪くなって しまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x20ダメージ。",
			},
		},
		{
			name: { ja: "いかり" },
			damage: "20+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数x10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559200,
			},
		},
	],

	evolveFrom: {
		ja: "ナマケロ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [288],
};

export default card;
