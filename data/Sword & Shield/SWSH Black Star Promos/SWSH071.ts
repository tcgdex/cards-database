import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Scorbunny",
		fr: "Flambino",
		es: "Scorbunny",
		pt: "Scorbunny",
		de: "Hopplo",
		it: "Scorbunny"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Me First",
			fr: "Moi d'Abord",
			es: "Yo Primero",
			pt: "Primeiro Eu",
			de: "Egotrip",
			it: "Precedenza"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			es: "Roba 1 carta.",
			pt: "Compre 1 carta.",
			de: "Ziehe 1 Karte.",
			it: "Pesca una carta."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Live Coal",
			fr: "Charbon Mutant",
			es: "Carbón Activado",
			pt: "Carvão Vivo",
			de: "Glühende Kohlen",
			it: "Carboni Ardenti"
		},

		damage: 20,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},

	stage: "Basic",
	dexId: [813],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427086
	}
}

export default card
