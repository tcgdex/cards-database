import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴウカザルV",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "りゅうせいパンチ" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ。",
			},
		},
		{
			name: { ja: "ぐれんのほのお" },
			damage: 200,
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
			type: "normal",
			thirdParty: {
				cardmarket: 605832,
				tcgplayer: 597430,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [392],
};

export default card;
