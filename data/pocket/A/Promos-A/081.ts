import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ultra Necrozma ex",
		'es-es': "Ultra-Necrozma ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [800],
	hp: 150,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Photon Claw",
			'es-es': "Garra Fotónica"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	},
	{
		name: {
			'en-us': "Shoegaze",
			'es-es': "Shoegaze"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Metal", "Metal"],

		effect: {
			'en-us': "Discard the top 5 cards of each player's deck.",
			'es-es': "Descarta las 5 primeras cartas de la baraja de cada jugador."
		}
	}],

	retreat: 2,
	boosters: ["vol9"],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}]
}

export default card