import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [281],
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
	},

	attacks: [{
		name: {
			en: "Mirage Step",
			fr: "Marche Mirage",
			es: "Paso Espejismo",
			it: "Passomiraggio",
			pt: "Passo Delirante",
			de: "Illusionsschritt"
		},

		effect: {
			en: "Search your deck for up to 3 Kirlia and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Kirlia, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 cartas de Kirlia y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Kirlia e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Kirlia no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Kirlia und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It has a psychic power that enables it to distort the space around it and see into the future."
	},

	thirdParty: {
		cardmarket: 567168
	}
}

export default card
