import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオスVMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "せいけんづき" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "キョダイイチゲキ" },
			damage: 270,
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 538623,
				tcgplayer: 569033,
			},
		},
	],

	evolveFrom: {
		ja: "いちげきウーラオスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [892],
};

export default card;
