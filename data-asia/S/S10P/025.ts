import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 冰岩怪"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "包覆下顎的冰塊裝甲硬度更勝鋼鐵，能輕易地擊碎岩石。冰岩怪藉此剷開 厚重積雪，在險峻的山路上猛衝。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "渾厚冰"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "冰山風"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加120點傷害。然後，將那張競技場卡丟棄。"
		},

		damage: "100+",
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card