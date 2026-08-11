import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Azurill",
		'fr-fr': "Azurill"
	},

	illustrator: "Rond",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [298],
	hp: 30,
	types: ["Colorless"],

	description: {
		'en-us': "Its tail bounces like a rubber ball. It flings that tail\naround to fight opponents bigger than itself.",
		'fr-fr': "Sa queue est une véritable balle rebondissante. Il s'en sert comme d'une massue lorsqu'il affronte des adversaires de taille imposante."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Squishy Healing",
			'fr-fr': "Soin qui Pomponne"
		},

		effect: {
			'en-us': "Heal 50 damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez 50 dégâts d'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card