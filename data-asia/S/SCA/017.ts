import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈箭鷹V"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "急速飛行"
		},

		effect: {
			'zh-tw': "這個招式在先攻玩家的最初回合也可使用。將自己的手牌全部丟棄，從牌庫抽出6張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "紅蓮之翼"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card