import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィアV",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "リーフガード" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "スラッシュダウン" },
			damage: 180,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 604992,
				tcgplayer: 597441,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [470],
};

export default card;
