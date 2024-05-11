import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水箭龜"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "會用重量驚人的身體壓住對手使其昏厥。遇到危險時會躲進殼裡。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "活力泉"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇最多6張能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水炮"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×30點傷害。"
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card