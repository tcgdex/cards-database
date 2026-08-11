import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓頭夜鷹"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "雙眼有著特殊的構造，只要有些微的光線，即使在黑暗中也能看得像白天一樣清楚。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "山劫"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，將這隻寶可夢與所選的寶可夢，與各自身上附加的卡，全部放回牌庫並重洗。若對手沒有備戰寶可夢，則這個招式失敗。"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card