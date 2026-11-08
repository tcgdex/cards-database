import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boltund",
		'fr-fr': "Fulgudog"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [836],
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Yamper"
	},

	description: {
		'en-us': "This Pokémon generates electricity and channels\nit into its legs to keep them going strong.\nBoltund can run nonstop for three full days.",
		'fr-fr': "Il produit de l'électricité puis la transfère dans ses pattes pour mieux courir. Ainsi, il peut foncer pendant trois jours et trois nuits."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Defiant Spark",
			'fr-fr': "Étincelle Rebelle"
		},

		damage: 70,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack can be used for 1 {L} Energy.",
			'fr-fr': "Si ce Pokémon a subi des dégâts, cette attaque peut être utilisée pour une Énergie {L}."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card