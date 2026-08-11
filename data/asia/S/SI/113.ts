import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "弱丁魚"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "感覺到危險時眼睛就會變得濕潤。 眼淚的光亮會成為召集夥伴的信號， 讓許多的弱丁魚聚在一起。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "群聚之力"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有3個以上【水】能量，則這隻寶可夢的最大HP增加「150」。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "魚群槍"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的基本能量的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card