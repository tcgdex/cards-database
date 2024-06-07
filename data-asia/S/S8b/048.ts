import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮雷彈"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "因為體內儲存著多到快要滿出來的電能，所以稍微受點刺激就會爆炸。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "能量發電"
		},

		effect: {
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次，若使用，則將這隻寶可夢【氣絕】。從自己的牌庫選擇最多2張【雷】能量卡，以任意方式附於自己的【雷】寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷電球"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card