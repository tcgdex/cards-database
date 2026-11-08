import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [573],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Minccino"
	},

	description: {
		'en-us': "Its body secretes oil that this Pokémon spreads\nover its nest as a coating to protect it from dust.\nCinccino won't tolerate even a speck of the stuff.",
		'fr-fr': "Il ne supporte pas de voir le moindre grain de poussière. Il utilise l'huile qu'il sécrète pour recouvrir son nid d'un revêtement protecteur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card