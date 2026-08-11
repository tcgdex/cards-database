import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いちげきウーラオスVMAX",
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
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587081,
				tcgplayer: 571533,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "いちげきウーラオスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Secret Rare",
	dexId: [892],
};

export default card;
