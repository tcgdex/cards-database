import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 踏冰人偶"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "踢踏舞的達人。會揮動手中的冰杖，向觀眾表演輕快的舞步。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "除障"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有能量的寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果無法消除。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "三重旋轉"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
