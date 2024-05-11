import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "魔牆人偶"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "行為舉止如同默劇表演，外貌則與小丑無異。能從指尖發出 氣場，造出透明的牆壁。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "戲法巴掌"
		},

		effect: {
			'zh-tw': "與對手玩家猜拳，若己方獲勝，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card