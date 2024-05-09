import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "イワンコ"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [744],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "かみつく"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card