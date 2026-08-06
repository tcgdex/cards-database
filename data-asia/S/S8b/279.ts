import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウVMAX",
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
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。",
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
		ja: "ピカチュウV",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Secret Rare",
	dexId: [25],
};

export default card;
