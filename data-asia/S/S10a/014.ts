import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "越是能製造出強大電流的皮卡丘，臉頰上的囊就越 柔軟，同時也越有伸展性。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "皮卡衝刺"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有能量，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "胡思亂撞"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card