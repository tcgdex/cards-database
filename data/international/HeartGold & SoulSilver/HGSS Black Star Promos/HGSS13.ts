import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Smoochum",
		'fr-fr': "Lippouti"
	},
	illustrator: "Midori Harada",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [238],
	hp: 30,
	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sweet Sleeping Face",
				'fr-fr': "Joli visage endormi"
			},
			effect: {
				'en-us': "As long as Smoochum is Asleep, prevent all damage done to Smoochum by attacks.",
				'fr-fr': "Tant que Lippouti reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques."
			}
		},
	],
	attacks: [
		{

			name: {
				'en-us': "Energy Antics",
				'fr-fr': "Singénergies"
			},
			effect: {
				'en-us': "Move an Energy card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon. Smoochum is now Asleep.",
				'fr-fr': "Déplacez une carte Énergie attachée à l'un des Pokémon de votre adversaire sur un autre de ses Pokémon. Lippouti est maintenant Endormi."
			},

		},
	],

	description: {
		'en-us': "Its lips are the most sensitive part of its body. It always uses its lips first to examine things."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275606,
				tcgplayer: 89364
			}
		},
	],

	retreat: 0
}

export default card
