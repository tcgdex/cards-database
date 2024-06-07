import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝伊布"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "伊布擁有著能夠為了適應周遭的環境而改變身體構造的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "集亮亮"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇最多與自己的場上寶可夢屬性種類數量相同數量的卡，加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "突進衝刺"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card