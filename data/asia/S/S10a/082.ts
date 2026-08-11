import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ ヌメルゴンV",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぬるりところばす" },
			damage: 60,
			cost: ["Water", "Metal"],
			effect: {
				'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "シェルローリング" },
			damage: 140,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657061,
				tcgplayer: 570745,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Ultra Rare",
	dexId: [706],
};

export default card;
