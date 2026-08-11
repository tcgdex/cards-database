import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンVMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "まてんろう" },
			effect: {
				ja: "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "キョダイフンサイ" },
			damage: 220,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587083,
				tcgplayer: 571536,
			},
		},
	],

	evolveFrom: {
		ja: "ジュラルドンV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Secret Rare",
	dexId: [884],
};

export default card;
