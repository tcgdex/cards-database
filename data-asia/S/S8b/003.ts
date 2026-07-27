import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "スピアー",
		'zh-tw': "大針蜂",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "集団で 現れることもある。 猛スピードで 飛び回り お尻の 毒針で 刺しまくる。",
		'zh-tw': "有時會成群結隊地出現。能以極快的速度飛來飛去， 並用尾部的毒針不斷刺擊對手。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "いってんばり",
				'zh-tw': "對點針刺",
			},
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンに特殊エネルギーがついているなら、そのポケモンをきぜつさせる。",
				'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量，則將那隻寶可夢【氣絕】。",
			},
		},
		{
			name: {
				ja: "ジェットスピア",
				'zh-tw': "噴射尖槍",
			},
			damage: 110,
			cost: ["Grass"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586518,
				tcgplayer: 571256,
			},
		},
	],

	evolveFrom: {
		ja: "コクーン",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [15],
};

export default card;
