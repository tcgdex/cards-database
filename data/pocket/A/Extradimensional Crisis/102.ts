import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgeot ex",
		'fr-fr': "Roucarnage-ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [18],
	hp: 170,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Pidgeotto"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Scattering Cyclone",
			'fr-fr': "Cyclone Ravageur"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Shiny"
}

export default card