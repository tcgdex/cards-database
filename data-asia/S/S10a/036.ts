import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "能夠迅速活動４隻手臂，從各種角度毫不停歇地 使出拳擊或手刀。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "火場筋力"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為3張以下，則這隻寶可夢的最大HP增加「150」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "剛腕金勾臂"
		},

		effect: {
			'zh-tw': "若希望，增加100點傷害。這個情況下，在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: "100+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card