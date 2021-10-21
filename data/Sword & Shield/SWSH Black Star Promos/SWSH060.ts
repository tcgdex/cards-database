import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		it: "Duraludon",
		pt: "Duraludon",
		de: "Duraludon"
	},

	illustrator: "Kazuma Koda",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Metal Sharpener",
			fr: "Affuteur de Métal",
			es: "Afilador de Metales",
			it: "Affilametallo",
			pt: "Metal Sharpener",
			de: "Metallschleifer"
		},

		effect: {
			en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
			pt: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			de: "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Power Beam",
			fr: "Puissant Rayon",
			es: "Rayo de Luz Poderoso",
			it: "Raggiopotenza",
			pt: "Power Beam",
			de: "Power-Strahl"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,

	description: {
		en: "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	stage: "Basic",
	dexId: [884],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
