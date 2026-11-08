import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria"
	},

	illustrator: "miki kudo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [334],
	hp: 120,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Swablu"
	},

	description: {
		'en-us': "If it bonds with a person, it will gently envelop\nthe friend with its soft wings, then hum.",
		'fr-fr': "Il enlace de ses magnifiques ailes cotonneuses les personnes qui lui sont chères et leur fredonne des mélodies."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Dragon Arcana",
			'fr-fr': "Savoir Draconique"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has 2 or more different types of Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si ce Pokémon a 2 différents types d'Énergie attachés ou plus, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card