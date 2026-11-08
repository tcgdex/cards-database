import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
		'es-es': "Salandit",
		'it-it': "Salandit",
		'pt-br': "Salandit",
		'de-de': "Molunk"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		757,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Grass Fire",
				'fr-fr': "Feu de Brousse",
				'es-es': "Quemaplantas",
				'it-it': "Fuoco d’Erba",
				'pt-br': "Fogo de Grama",
				'de-de': "Pflanzenbrand"
			},
			effect: {
				'en-us': "Discard a Grass Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie Grass du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Grass del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia Grass assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Grass do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Grass-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The males will do whatever the females tell them. They give the females most of their food. Due to malnutrition, the males can't evolve.",
	},

	thirdParty: {
		cardmarket: 372322,
		tcgplayer: 189079
	}
}

export default card
