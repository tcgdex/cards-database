import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍梅西亞"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然單獨１隻弱得甚至敵不過小孩，但會和夥伴合作一起鍛鍊，透過進化而變得更強。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "死纏爛打"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card