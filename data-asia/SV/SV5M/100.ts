import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイワオex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リパルサーアックス" },
			damage: 60,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
			},
		},
		{
			name: { ja: "パワースタンプ" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752988,
				tcgplayer: 566251,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [1022],

	suffix: "EX",
};

export default card;
