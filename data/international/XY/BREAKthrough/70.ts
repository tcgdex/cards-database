import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Cresselia",
		'fr-fr': "Cresselia",
		'es-es': "Cresselia",
		'it-it': "Cresselia",
		'pt-br': "Cresselia",
		'de-de': "Cresselia"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		488,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "My Way",
				'fr-fr': "Ma Façon",
				'es-es': "A mi Manera",
				'it-it': "A Modo Mio",
				'pt-br': "Meu Jeito",
				'de-de': "Auf meine Art"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this Pokémon has no Retreat Cost.",
				'fr-fr': "S'il y a une carte Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
				'es-es': "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				'it-it': "Se c'è in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				'pt-br': "Se houver algum card de Estádio em jogo, este Pokémon não terá Custo para Recuar.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Moonlight Gain",
				'fr-fr': "Soin au Clair de Lune",
				'es-es': "Ganancia Lunar",
				'it-it': "Cura Lunare",
				'pt-br': "Ganho de Luar",
				'de-de': "Mondlichtabsorption"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.",
	},

	thirdParty: {
		cardmarket: 286316,
		tcgplayer: 107189
	}
}

export default card
