import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Floating Shell",
				'fr-fr': "Carapace Flottante",
				'es-es': "Caparazón Flotante",
				'it-it': "Guscio Galleggiante",
				'pt-br': "Carapaça Flutuante",
				'de-de': "Gleitpanzer"
			},
			effect: {
				'en-us': "If you have a Stadium card in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si vous avez une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				'es-es': "Si tienes 1 carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se hai in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se você tiver uma carta de Estádio em jogo, este Pokémon não terá custo de Recuo.",
				'de-de': "Wenn du eine Stadionkarte im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
	},

	thirdParty: {
		cardmarket: 368954,
		tcgplayer: 183793
	}
}

export default card
