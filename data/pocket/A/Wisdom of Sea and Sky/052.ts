import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [195],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wooper"
	},

	description: {
		'en-us': "It has an easygoing nature. It doesn't care if it\nbumps its head on boats and boulders\nwhile swimming.",
		'fr-fr': "Il a tendance à se cogner la tête contre la coque des navires et les rochers, mais, imperturbable, il continue de nager comme si de rien n'était."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Surf",
			'fr-fr': "Surf"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card