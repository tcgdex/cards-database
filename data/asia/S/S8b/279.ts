import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピカチュウVMAX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "キョダイボルテッカー" },
			damage: "120+",
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587077,
				tcgplayer: 571530,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ピカチュウV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Secret Rare",
	dexId: [25],
};

export default card;
