import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			'en-us': "Exoskeleton",
			'fr-fr': "Exosquelette"
		},

		effect: {
			'en-us': "Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance).",
			'fr-fr': "Tout dégât infligé à Donphan par des attaques est réduit de 20 (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme"
		},

		effect: {
			'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros impact"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	retreat: 4,
	suffix: "Prime",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576789,
				tcgplayer: 250336
			}
		},
	],
}

export default card
