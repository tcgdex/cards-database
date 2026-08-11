import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "用溫順的長相讓對手大意，然後用大顎一口咬住對手。咬住後就絕不會鬆口。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "尋找朋友"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬碎"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card