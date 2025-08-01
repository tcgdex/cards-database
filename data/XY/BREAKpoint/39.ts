import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Frogadier",
		fr: "Croâporal",
		es: "Frogadier",
		it: "Frogadier",
		pt: "Frogadier",
		de: "Amphizel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		657,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Duplicates",
				fr: "Duplicat'Eau",
				es: "Duplicados de Agua",
				it: "Idrocopie",
				pt: "Duplicações de Água",
				de: "Wasserduplikate"
			},
			effect: {
				en: "Search your deck for up to 3 Frogadier and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 Croâporal dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 Frogadier y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a tre Frogadier e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 3 Frogadier e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 3 Amphizel und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288214
	}
}

export default card
