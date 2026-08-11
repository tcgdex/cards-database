import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーンV",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ばくおんぱ" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "シンクロラウド" },
			damage: "60+",
			cost: ["Psychic", "Darkness"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572056,
				tcgplayer: 569397,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Ultra Rare",
	dexId: [715],
};

export default card;
