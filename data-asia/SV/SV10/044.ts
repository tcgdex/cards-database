import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>以歐路普",
		'zh-cn': "<火箭隊的>以歐路普",
		ja: "ロケット団のイオルブ"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "釋放出精神力量來調查 周圍的情況。牠的偵測範圍 甚至可以達到方圓１０公里。",
		'zh-cn': "釋放出精神力量來調查 周圍的情況。牠的偵測範圍 甚至可以達到方圓１０公里。",
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "火箭腦力",
			'zh-cn': "火箭腦力",
			ja: "ロケットブレイン"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上的「火箭隊的寶可夢」身上放置的傷害指示物，改放於自己的其他寶可夢身上。",
			'zh-cn': "在自己的回合時，可不限次數使用。選擇1個自己的場上的「火箭隊的寶可夢」身上放置的傷害指示物，改放於自己的其他寶可夢身上。",
			ja: "自分の番に何回でも使える。自分の場の「ロケット団のポケモン」にのっているダメカンを1個選び、自分の別のポケモンにのせ替える。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			'zh-cn': "精神強念",
			ja: "サイコキネシス"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×40點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上附加的能量的數量×40點傷害。",
			ja: "相手のバトルポケモンについているエネルギーの数×40ダメージ追加。"
		},

		damage: "40＋",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [826]
}

export default card