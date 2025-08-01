import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Starly",
		fr: "Étourmi",
		es: "Starly",
		it: "Starly",
		pt: "Starly",
		de: "Staralili"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 50,

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
				en: "Call for Pals",
				fr: "Appel aux Copains",
				es: "Llamar a los Colegas",
				it: "Cerca Compagni",
				pt: "Chamar os Amigos",
				de: "Kumpanenruf"
			},
			effect: {
				en: "Search your deck for as many Starly as you like and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck autant d'Étourmi que vous voulez et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja tantos Starly como quieras y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo tutti gli Starly che vuoi e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho tantos Starly quanto desejar e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach beliebig vielen Staralili und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286371
	}
}

export default card
