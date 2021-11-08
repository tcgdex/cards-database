import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		es: "Mantine",
		pt: "Mantine",
		de: "Mantax"
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
			pt: "Water Reserve",
			de: "Wasserreserve"
		},

		effect: {
			en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 cartas de Energía Water, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			en: "Wave Splash",
			es: "Chapoteo Ondulante",
			pt: "Wave Splash",
			de: "Wellenplatscher"
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

	regulationMark: "D"
}

export default card