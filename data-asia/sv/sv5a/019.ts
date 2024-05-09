import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘイガニ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [341],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "水質が 悪くても 平気なので ほかの 水ポケモンと エサの 奪い合いがなく どんどん 増えた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "はさむ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card