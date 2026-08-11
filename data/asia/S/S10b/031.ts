import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "精神光芒"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的最多3張【超】能量卡丟棄，造成其張數×90點傷害。"
		},

		damage: "90×",
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星襲擊"
		},

		effect: {
			'zh-tw': "對手的所有「寶可夢【V】」各受到120點傷害。這個招式的傷害不計算弱點・抵抗力。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Psychic", "Colorless"]
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