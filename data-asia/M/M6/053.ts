import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "モトトカゲ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "喉の ひだの中に エネルギーを 蓄えているので 人を 乗せて 長距離を 走り続けられる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ブレイクスルー" },
			damage: 110,
			cost: ["Grass", "Darkness", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899956,
				tcgplayer: 709206,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [967],
};

export default card;
