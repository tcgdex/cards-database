import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンVMAX",
	},

	illustrator: "",
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
				cardmarket: 572064,
				tcgplayer: 569405,
			},
		},
	],

	evolveFrom: {
		ja: "ジュラルドンV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [884],
};

export default card;
