import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "タケルライコex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はじけるほうこう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべてトラッシュし、山札を6枚引く。",
			},
		},
		{
			name: { ja: "きょくらいごう" },
			damage: "70×",
			cost: ["Lightning", "Fighting"],
			effect: {
				ja: "自分の場のポケモンについている基本エネルギーを好きなだけトラッシュし、その枚数×70ダメージ。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752834,
				tcgplayer: 568387,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1021],

	suffix: "EX",
};

export default card;
