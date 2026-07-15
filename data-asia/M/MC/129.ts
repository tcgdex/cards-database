import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオンex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "やけつくじょうき" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートサイクロン" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863425,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [721],

	suffix: "EX",
};

export default card;
