import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アーゴヨンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ビーストレイド" },
			damage: "20×",
			cost: ["Colorless"],
			effect: {
				ja: "自分の場の「ウルトラビースト」の数x20ダメージ。",
			},
		},
		{
			name: { ja: "ジェットタッカー" },
			damage: 110,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "スティンガーGX" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "おたがいのプレイヤーは、それぞれサイドをすべて山札にもどして切る。その後、それぞれ山札を上から3枚、サイドとして置く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551611,
			},
		},
	],

	evolveFrom: {
		ja: "ベベノム",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [804],

	suffix: "GX",
};

export default card;
