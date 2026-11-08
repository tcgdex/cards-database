import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フシギダネ",
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゆすってあつめる" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
				'en-us': "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681793,
				tcgplayer: 597502,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [1],
};

export default card;
