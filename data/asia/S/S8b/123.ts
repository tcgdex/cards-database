import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュラルドンVMAX",
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
				ja: "まてんろう",
				'zh-tw': "摩天樓",
			},
			effect: {
				ja: "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的身上附有特殊能量的寶可夢招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "キョダイフンサイ",
				'zh-tw': "超極巨碎骨粉身",
			},
			damage: 220,
			cost: ["Fighting", "Metal", "Metal"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
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
				cardmarket: 586639,
				tcgplayer: 571376,
			},
		},
	],

	evolveFrom: {
		ja: "ジュラルドンV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [884],
};

export default card;
