import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒートロトムex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいかねつ" },
			damage: "30×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある「基本[R]エネルギー」をすべて相手に見せて、その枚数×30ダメージ。その後、見せたエネルギーを山札にもどして切る。",
			},
		},
		{
			name: { ja: "ストロングフレア" },
			damage: 170,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 899868,
				tcgplayer: 709171,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [479],

	suffix: "EX",
};

export default card;
