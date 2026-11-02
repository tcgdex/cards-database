import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "オンバーンV",
		'zh-tw': "音波龍V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ばくおんぱ",
				'zh-tw': "爆音波",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "シンクロラウド",
				'zh-tw': "同步高聲",
			},
			damage: "60+",
			cost: ["Psychic", "Darkness"],
			effect: {
				ja: "自分の手札と相手の手札が同じ枚数なら、120ダメージ追加。",
				'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加120點傷害。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 571632,
				tcgplayer: 569369,
			},
		},
	],

	retreat: 0,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [715],
};

export default card;
