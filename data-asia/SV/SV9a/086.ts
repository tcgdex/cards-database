import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒビキのホウオウex",
		'zh-tw': "<阿響的>鳳王ex",
		'zh-cn': "<阿響的>鳳王ex"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんじきのほのお",
			'zh-tw': "金色火焰",
			'zh-cn': "金色火焰"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を2枚まで選び、ベンチの「ヒビキのポケモン」1匹につける。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇最多2張「基本【火】能量」卡，附於備戰區的1隻「阿響的寶可夢」身上。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇最多2張「基本【火】能量」卡，附於備戰區的1隻「阿響的寶可夢」身上。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Fire", "Fire"],

		name: {
			ja: "シャイニングフェザー",
			'zh-tw': "閃耀羽毛",
			'zh-cn': "閃耀羽毛"
		},

		damage: 160,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「50」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「50」HP。",
			'zh-cn': "將自己的所有寶可夢各恢復「50」HP。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card