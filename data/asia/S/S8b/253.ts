import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュラルドンVMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まてんろう" },
			effect: {
				'ja-jp': "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キョダイフンサイ" },
			damage: 220,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587051,
				tcgplayer: 571505,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジュラルドンV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [884],
};

export default card;
