import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "スリープ",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "こと 楽しい夢は 美味いらしい。 なつくと 一番 美味しかった 夢を みせてくれることも あるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコブーム" },
			damage: "10×",
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x10ダメージ。",
			},
		},
		{
			name: { ja: "ずつき" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561625,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [96],
};

export default card;
