import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptéra"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [142],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Old Amber"
	},

	description: {
		'en-us': "This is a ferocious Pokémon from ancient times.\nApparently even modern technology is incapable\nof producing a perfectly restored specimen.",
		'fr-fr': "On raconte qu'aujourd'hui encore, il est impossible de restaurer à la perfection ce Pokémon féroce de l'ère préhistorique."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Primal Wingbeat",
			'fr-fr': "Aile Primitive"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire mélange son Pokémon Actif avec son deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card