import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豆豆鴿"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "會出現在人類生活的地方。一旦撒出飼料就會有好幾百隻豆豆鴿聚集而來，千萬要小心。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "羽擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card