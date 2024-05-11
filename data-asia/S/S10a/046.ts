import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝洗翠 大狃拉"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "擁有凌駕其他物種之上的身體能力以及劇毒。在寒冷的高地上所向無敵。 偏好獨自行動，而不會集結成群。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "巔峰毒性"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的戰鬥寶可夢因【中毒】而放置的傷害指示物的數量增加2個。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "毒擊"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card