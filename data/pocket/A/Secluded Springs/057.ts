import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lickitung",
		'fr-fr': "Excelangue"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [108],
	hp: 80,
	types: ["Colorless"],

	description: {
		'en-us': "If this Pokémon's sticky saliva gets on you and\nyou don't clean it off, an intense itch will set in.\nThe itch won't go away, either.",
		'fr-fr': "Si sa salive gluante entre en contact avec la peau et qu'on ne l'essuie pas bien, elle provoque de terribles démangeaisons qui ne s'arrêtent jamais."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stretch Tongue",
			'fr-fr': "Langue à Rallonge"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card