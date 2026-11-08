import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "tetsuya koizumi",
	category: "Pokemon",

	description: {
		'en-us': "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	stage: "Basic",

	name: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'de-de': "Pikuda",
		'es-es': "Arrokuda",
		'pt-br': "Arrokuda",
		'it-it': "Arrokuda"
	},

	rarity: "Promo",
	dexId: [846],
	hp: 60,
	types: ["Water"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flock",
			'fr-fr': "Nuée",
			'de-de': "Ausschwärmen",
			'es-es': "Multitud",
			'pt-br': "Bando",
			'it-it': "Frotta"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Embrochet, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pikuda und lege sie auf deine Bank. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Arrokuda y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 Arrokuda no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due Arrokuda e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'es-es': "Picotazo",
			'pt-br': "Bicada",
			'it-it': "Beccata"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 547036
	}
}

export default card
