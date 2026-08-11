import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジュラルドンVMAX",
		'zh-tw': "鋁鋼龍VMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "まてんろう",
				'zh-tw': "摩天樓",
			},
			effect: {
				'ja-jp': "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的身上附有特殊能量的寶可夢招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "キョダイフンサイ",
				'zh-tw': "超極巨碎骨粉身",
			},
			damage: 220,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				'ja-jp': "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
				'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571636,
				tcgplayer: 569372,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ジュラルドンV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [884],
};

export default card;
