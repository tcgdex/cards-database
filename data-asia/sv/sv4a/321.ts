import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マスカーニャex",
		'zh-tw': "魔幻假面喵ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブーケマジック",
			'zh-tw': "花束魔法"
		},

		effect: {
			ja: "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。相手のベンチポケモン1匹に、ダメカンを3個のせる。",
			'zh-tw': "在自己的回合，若從自己的手牌將1張「基本【草】能量」卡丟棄，則可使用1次。在對手的1隻備戰寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スクラッチネイル",
			'zh-tw': "抓刮銳爪"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、120ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card