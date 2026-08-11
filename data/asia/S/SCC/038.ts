import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水躍魚"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "會用頭上的鰭感知水流，藉此了解周圍的狀況。是個能舉起岩石的大力士。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擲泥"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "調皮踢"
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card