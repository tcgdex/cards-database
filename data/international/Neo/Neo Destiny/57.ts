import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [C]",
		'fr-fr': "Zarbi C",
		'de-de': "Icognito C"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "[Chase]",
				'fr-fr': "[Chase]",
				'de-de': "Chase"
			},
			effect: {
				'en-us': "As long as Unown C is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance.",
				'fr-fr': "Tant que Zarbi [C] est votre Pokémon Actif, si le Pokémon Actif de votre adversaire essaie de battre en retraite, lancez une pièce. Si c'est face, placez 1 marqueur de dégâts sur ce Pokémon. Appliquez la Faiblesse et la Résistance.",
				'de-de': "As laong as Unown C is your Active Pokémon, whenever your opponent's Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is believed that the variety of types of this Pokémon were created by evolutionary adaptation, as each possesses a different ability.",
		'fr-fr': "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274709,
				tcgplayer: 90201
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274709,
				tcgplayer: 90201
			}
		}
	]
}

export default card
