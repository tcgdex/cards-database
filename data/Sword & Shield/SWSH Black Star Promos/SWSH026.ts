import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		es: "Mantine",
		pt: "Mantine",
		de: "Mantax",
		fr: "Démanta",
		it: "Mantine"
	},

	illustrator: "0313",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Water Reserve",
			es: "Reserva de Agua",
			pt: "Reservatório de Água",
			de: "Wasserreserve",
			fr: "Réserve d'Eau",
			it: "Riserva Idrica"
		},

		effect: {
			en: "Search your deck for up to 3 {W} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía {W}, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 cartas de Energia {W} no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 {W}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 cartes Énergie {W}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			it: "Cerca nel tuo mazzo fino a tre carte Energia {W}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Wave Splash",
			es: "Chapoteo Ondulante",
			pt: "Onda Borrifante",
			de: "Wellenplatscher",
			fr: "Grosse Vague",
			it: "Schizzi d'Onda"
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
		en: "If it builds up enough speed swimming, it can jump out above the waves and glide for over 300 feet."
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