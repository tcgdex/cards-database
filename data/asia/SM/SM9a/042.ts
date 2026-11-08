import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベロベルト",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'ja-jp': "舌が どこまで 伸びるのかの コンテストが 開催 されている。 現在の 最高記録は２５ｍ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つまんでたべる" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。トラッシュした場合、このポケモンのHPを、すべて回復する。",
			},
		},
		{
			name: { ja: "ベロベロハリケーン" },
			damage: "60×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数x60ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558229,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベロリンガ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [463],
};

export default card;
