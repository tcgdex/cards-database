import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	dexId: [657],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Froakie"
	},

	description: {
		'en-us': "It can throw bubble-covered pebbles with precise\ncontrol, hitting empty cans up to a hundred feet away.",
		'fr-fr': "Il est capable de lancer des pierres recouvertes de mousse avec une précision suffisante pour toucher une canette vide à 30 m."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Water Drip",
			'fr-fr': "Goutte à Goutte"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card