import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴロンダ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "気性が 荒く ケンカっ早いが 弱いものいじめは 許さない。 葉っぱで 敵の 動きを 読む。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どつく" },
			damage: 40,
			cost: ["Darkness"],
		},
		{
			name: { ja: "おやぶんパンチ" },
			damage: "80+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "自分のベンチの「ヤンチャム」にダメカンがのっているなら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861356,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861710,
			},
		},
		{
			type: "reverse",
			foil: "loveball",
			thirdParty: {
				cardmarket: 861711,
			},
		},
	],

	evolveFrom: {
		ja: "ヤンチャム",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [675],
};

export default card;
