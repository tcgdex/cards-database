import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コライドン",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Dragon"],

	description: {
		'ja-jp': "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げんせいらんだ" },
			damage: "30×",
			cost: ["Fighting", "Colorless"],
			effect: {
				'ja-jp': "自分の場の「古代」のポケモンの数×30ダメージ。",
			},
		},
		{
			name: { ja: "ひきさく" },
			damage: 130,
			cost: ["Fire", "Fighting", "Colorless"],
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
				cardmarket: 752833,
				tcgplayer: 568386,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [1007],
};

export default card;
