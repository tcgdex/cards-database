import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mantine",
		'es-es': "Mantine",
		'pt-br': "Mantine",
		'de-de': "Mantax",
		'fr-fr': "Démanta",
		'it-it': "Mantine"
	},

	illustrator: "0313",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Water Reserve",
			'es-es': "Reserva de Agua",
			'pt-br': "Reservatório de Água",
			'de-de': "Wasserreserve",
			'fr-fr': "Réserve d'Eau",
			'it-it': "Riserva Idrica"
		},

		effect: {
			'en-us': "Search your deck for up to 3 {W} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía {W}, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 cartas de Energia {W} no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 {W}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie {W}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia {W}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		},

		cost: ["Water"]
	}, {
		name: {
			'en-us': "Wave Splash",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher",
			'fr-fr': "Grosse Vague",
			'it-it': "Schizzi d'Onda"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "If it builds up enough speed swimming, it can jump out above the waves and glide for over 300 feet."
	},

	stage: "Basic",
	dexId: [226],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 461669
	}
}

export default card
