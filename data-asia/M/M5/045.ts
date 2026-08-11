import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "コライドン",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "バトルクロー" },
			damage: "30+",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンが進化ポケモンなら、30ダメージ追加。",
			},
		},
		{
			name: { ja: "ガイアインパクト" },
			damage: 190,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888300,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [1007],
};

export default card;
