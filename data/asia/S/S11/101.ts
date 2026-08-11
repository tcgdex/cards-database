import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシーV",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あやしいともしび" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "マジカルファイヤー" },
			damage: 120,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個、ロストゾーンに置き、相手のベンチポケモン1匹にも、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668219,
				tcgplayer: 570032,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [655],
};

export default card;
