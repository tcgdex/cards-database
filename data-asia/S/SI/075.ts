import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "超頻點火"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的【灼傷】的寶可夢，就算在寶可夢檢查時擲的硬幣為正面，【灼傷】也不會恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆破地獄"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card