import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウツー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "１人の 科学者が 何年も 恐ろしい 遺伝子 研究を 続けた 結果 誕生した。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マインドリポート" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュにあるサポートを1枚、相手に見せてから、山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコショック" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543811,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "None",
	dexId: [150],
};

export default card;
