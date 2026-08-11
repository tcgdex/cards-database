import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・テテフ",
		'zh-tw': "卡璞・蝶蝶",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "守り神と 呼ばれるが 無邪気で 残酷な 性質も 併せ持つ 自然の化身と いえる 存在。",
		'zh-tw': "被稱為守護神，卻同時有著天真無邪與殘酷的性格，可說是大自然的化身。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エネバースト",
				'zh-tw': "能量爆炸",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×20ダメージ。",
				'zh-tw': "造成雙方的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			},
		},
		{
			name: {
				ja: "スパイラルドレイン",
				'zh-tw': "螺旋吸取",
			},
			damage: 100,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673041,
				tcgplayer: 570806,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [786],
};

export default card;
