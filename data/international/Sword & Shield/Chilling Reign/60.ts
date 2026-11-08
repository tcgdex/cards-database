import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [281],
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	attacks: [{
		name: {
			'en-us': "Mirage Step",
			'fr-fr': "Marche Mirage",
			'es-es': "Paso Espejismo",
			'it-it': "Passomiraggio",
			'pt-br': "Passo Delirante",
			'de-de': "Illusionsschritt"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Kirlia and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Kirlia, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Kirlia y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Kirlia e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Kirlia no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Kirlia und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It has a psychic power that enables it to distort the space around it and see into the future."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567168,
				tcgplayer: 241721
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567168,
				tcgplayer: 241721
			}
		},
	],
}

export default card
