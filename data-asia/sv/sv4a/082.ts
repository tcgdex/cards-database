import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーナイトex",
		'zh-tw': "沙奈朵ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サイコエンブレイス",
			'zh-tw': "精神擁抱"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分のトラッシュから「基本エネルギー」を1枚選び、自分のポケモンにつける。その後、つけたポケモンにダメカンを2個のせる。（きぜつするポケモンに、この特性は使えない。）",
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的棄牌區選擇1張「基本【超】能量」卡，附於自己的【超】寶可夢身上。然後，在附上那張卡的寶可夢身上放置2個傷害指示物。（這個特性無法對會【昏厥】的寶可夢使用。）"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ミラクルフォース",
			'zh-tw': "奇跡之力"
		},

		damage: 190,

		effect: {
			ja: "このポケモンの特殊状態を、すべて回復する。",
			'zh-tw': "將這隻寶可夢的特殊狀態全部恢復。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card