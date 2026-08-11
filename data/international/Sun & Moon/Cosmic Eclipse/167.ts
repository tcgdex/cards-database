import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Follow My Tail",
				'fr-fr': "À la Queuleuleu",
				'es-es': "Señuelo Cola",
				'it-it': "Codaqui",
				'pt-br': "Siga a Cauda",
				'de-de': "Folge dem Schweif"
			},
			effect: {
				'en-us': "Search your deck for any number of Eevee and Eevee-GX and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez autant d’Évoli et Évoli-GX que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja cualquier cantidad de Eevee e Eevee-GX y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un numero qualsiasi di Eevee e Eevee-GX e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por qualquer número de Eevee e Eevee-GX no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach beliebig vielen Evoli und Evoli-GX und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The question of why only Eevee has such unstable genes has still not been solved.",
	},

	thirdParty: {
		cardmarket: 408459,
		tcgplayer: 201289
	}
}

export default card
