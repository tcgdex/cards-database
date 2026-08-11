import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [620],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mienfoo"
	},

	description: {
		'en-us': "When Mienshao comes across a truly challenging\nopponent, it will lighten itself by biting off the\nfur on its arms.",
		'fr-fr': "Lorsqu'il fait face à un adversaire vraiment redoutable, il coupe les poils de sa main avec les dents pour améliorer son agilité."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card