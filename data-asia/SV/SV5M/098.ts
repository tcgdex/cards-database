import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイサハex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ラピッドバーニア" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。このポケモンをバトルポケモンと入れ替える。入れ替えた場合、自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "プリズムエッジ" },
			damage: 180,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752985,
				tcgplayer: 566249,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
	dexId: [1010],

	suffix: "EX",
};

export default card;
