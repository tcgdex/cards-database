import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大狃拉"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "擁有凌駕其他物種之上的身體能力以及劇毒。在寒冷的高地上所向無敵。 偏好獨自行動，而不會集結成群。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "搬運攀爬"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在備戰區，自己的戰鬥寶可夢【撤退】所需的能量減少2個。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card