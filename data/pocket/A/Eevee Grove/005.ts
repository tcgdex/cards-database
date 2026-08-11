import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tsareena",
		'fr-fr': "Sucreine"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [763],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Steenee"
	},

	description: {
		'en-us': "This Pokémon is proud and aggressive. However, it is\nsaid that a Tsareena will instantly become calm if\nsomeone touches the crown on its calyx.",
		'fr-fr': "Ce Pokémon est aussi fier qu'agressif. On dit néanmoins qu'il se calme instantanément quand on touche la couronne sur sa tête."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Kick Down",
			'fr-fr': "Coup Séparateur"
		},

		damage: 50,
		cost: ["Grass"],

		effect: {
			'en-us': "Your opponent reveals a random card from their hand and shuffles it into their deck.",
			'fr-fr': "Votre adversaire montre une carte de sa main au hasard, puis la mélange avec son deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card