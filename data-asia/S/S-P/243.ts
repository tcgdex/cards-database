import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひろがるほのお" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュから[炎]エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。",
			},
		},
		{
			name: { ja: "エネバースト" },
			damage: "30×",
			cost: ["Fire", "Fire"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 585973,
				tcgplayer: 597236,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [494],
};

export default card;
