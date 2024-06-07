import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白馬蕾冠王V"
	},

	illustrator: "D.A.G Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "五顏六色變化"
		},

		effect: {
			'zh-tw': "這隻寶可夢的屬性改為與這隻寶可夢身上附加的基本能量相同。（若身上附加的基本能量屬性有2種以上，則改為各自屬性。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card