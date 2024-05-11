import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海魔獅"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "只要是圓形的東西，無論是精靈球還是海豹球，都能頂在鼻子上隨心所欲地轉動。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電磁吸附"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "極巨衝刺"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「極巨衝刺」的傷害「+150」點。"
		},

		damage: 100,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card