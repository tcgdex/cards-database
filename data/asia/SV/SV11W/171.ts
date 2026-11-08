import { Card } from "models/database/card";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サザンドラex",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "グリードイーター" },
			effect: {
				'ja-jp': "このポケモンが使うワザのダメージで、相手のたねポケモンがきぜつしたなら、サイドを1枚多くとる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダークバイト" },
			damage: 200,
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			effect: {
				'ja-jp': "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],

	evolveFrom: {
		'ja-jp': "ジヘッド",
	},

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Special illustration rare",
	suffix: "EX",
	dexId: [635],
	thirdParty: {
		cardmarket: 829530,
		tcgplayer: 636724,
	},
};

export default card;
