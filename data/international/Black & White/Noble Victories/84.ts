import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Cobalion",
		'fr-fr': "Cobaltium",
		'es-es': "Cobalion",
		'it-it': "Cobalion",
		'pt-br': "Cobalion",
		'de-de': "Kobalium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		638,
	],

	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Energy Press",
				'fr-fr': "Pression Énergétique",
			},
			effect: {
				'en-us': "Does 20 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Breaker",
				'fr-fr': "Brise-Fer",
			},
			effect: {
				'en-us': "The Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a body and heart of steel. Its glare is sufficient to make even an unruly Pokémon obey it.",
	},

	thirdParty: {
		cardmarket: 280207,
		tcgplayer: 84378
	}
}

export default card
