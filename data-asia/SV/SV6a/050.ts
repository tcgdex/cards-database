import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "有著不規則的基因。 石頭散發出的放射線， 會使牠的身體發生突變。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鮮豔捕捉"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭錘"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card