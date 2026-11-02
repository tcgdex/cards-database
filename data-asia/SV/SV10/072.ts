import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニューラ",
		'zh-tw': "<火箭隊的>狃拉",
		'zh-cn': "<火箭隊的>狃拉",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "自分が 目立たないよう 暗闇に まぎれて 獲物に 襲いかかる とても ずる賢い ポケモン。",
		'zh-tw': "會潛藏在黑暗中使自己變得 不起眼，然後伺機襲擊獵物， 是非常狡詐的寶可夢。",
		'zh-cn': "會潛藏在黑暗中使自己變得 不起眼，然後伺機襲擊獵物， 是非常狡詐的寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
				'zh-cn': "抓",
			},
			damage: 20,
			cost: ["Darkness"],
		},
		{
			name: {
				ja: "ねくびをかく",
				'zh-tw': "暗算",
				'zh-cn': "暗算",
			},
			cost: ["Darkness", "Darkness"],
			effect: {
				ja: "相手のベンチポケモン1匹に、そのポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻備戰寶可夢，受到那隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]",
				'zh-cn': "對手的1隻備戰寶可夢，受到那隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821904,
				tcgplayer: 628713,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [215],
};

export default card;
