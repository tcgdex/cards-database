import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
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
				en: "Follow My Tail",
				fr: "À la Queuleuleu",
				es: "Señuelo Cola",
				it: "Codaqui",
				pt: "Siga a Cauda",
				de: "Folge dem Schweif"
			},
			effect: {
				en: "Search your deck for any number of Eevee and Eevee-GX and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez autant d’Évoli et Évoli-GX que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja cualquier cantidad de Eevee e Eevee-GX y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo un numero qualsiasi di Eevee e Eevee-GX e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por qualquer número de Eevee e Eevee-GX no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach beliebig vielen Evoli und Evoli-GX und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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

	thirdParty: {
		cardmarket: 408454
	}
}

export default card
