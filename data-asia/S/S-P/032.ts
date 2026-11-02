import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "きずにうちこむ" },
			damage: "10+",
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463059,
				tcgplayer: 597252,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [877],
};

export default card;
