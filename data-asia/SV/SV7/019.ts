import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯ex",
		'zh-cn': "拉普拉斯ex",
		ja: "ラプラスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "力量飛濺",
			'zh-cn': "力量飛濺",
			ja: "パワースプラッシュ"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×40點傷害。",
			'zh-cn': "造成這隻寶可夢身上附加的能量的數量×40點傷害。",
			ja: "このポケモンについているエネルギーの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "海紋石之雨",
			'zh-cn': "海紋石之雨",
			ja: "ラリマーレイン"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方20張卡，從其中選擇任意數量的能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			'zh-cn': "查看自己的牌庫上方20張卡，從其中選擇任意數量的能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。",
			ja: "自分の山札を上から20枚見て、その中からエネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。"
		},

		cost: ["Water", "Psychic", "Metal"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",

	thirdParty: {
		cardmarket: 779033
	}
}

export default card