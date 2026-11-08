import { Card } from "models/database/card";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シビルドン",
		'zh-tw': "麻麻鰻魚王",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'ja-jp': "腕の 力で 海から はい出し 水辺の 獲物に 襲いかかる。 一瞬で 海へ 引きずりこむ。",
		'zh-tw': "用手臂的力量從大海裡爬出，襲擊水邊的獵物。 會瞬間將獵物拖入海中。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "とぐろをまく",
				'zh-tw': "盤蜷",
			},
			damage: 10,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
				'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			},
		},
		{
			name: {
				'ja-jp': "げきでんりゅう",
				'zh-tw': "激電流",
			},
			damage: 160,
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667916,
				tcgplayer: 569972,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シビビール",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [604],
};

export default card;
