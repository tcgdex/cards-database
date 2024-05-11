import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪笠怪"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雪笠怪肚子上結出來的樹果口感彷如冰棒， 是伽勒爾的火紅不倒翁們的最愛。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擊倒"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card