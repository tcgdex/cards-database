import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spirit Compressor",
				'fr-fr': "Réducteur d’Âmes",
				'es-es': "Compresor de Espíritus",
				'it-it': "Compressore Spirituale",
				'pt-br': "Compressor Espiritual",
				'de-de': "Seelenkompressor"
			},
			effect: {
				'en-us': "Search your deck for up to 4 Pokémon and discard them. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 4 Pokémon dans votre deck et défaussez-les. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 4 Pokémon y descártalos. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a quattro Pokémon e scartali. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 4 Pokémon no seu baralho e descarte-os. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 4 Pokémon und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spooky Shot",
				'fr-fr': "Tir Effrayant",
				'es-es': "Disparo Embrujado",
				'it-it': "Colpomistero",
				'pt-br': "Tiro Assustador",
				'de-de': "Spukschuss"
			},

			damage: 20,

		},
	],

	retreat: 1,

	description: {
		'en-us': "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago",
	},

	thirdParty: {
		cardmarket: 369019,
		tcgplayer: 183867
	}
}

export default card
