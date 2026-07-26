import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "コライドン",
		'zh-tw': "月光丘陵",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ランページファング" },
			damage: 190,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 695791,
				tcgplayer: 587806,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [1007],
};

export default card;
