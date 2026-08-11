import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Duraludon",
		'fr-fr': "Duralugon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},

	illustrator: "Kazuma Koda",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Metal Sharpener",
			'fr-fr': "Affuteur de Métal",
			'es-es': "Afilador de Metales",
			'it-it': "Affilametallo",
			'pt-br': "Amolador de Metal",
			'de-de': "Metallschleifer"
		},

		effect: {
			'en-us': "Attach a {M} Energy card from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Attachez une carte Énergie {M} de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Une 1 carta de Energía {M} de tu pila de descartes a 1 de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia {M} dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia {M} da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege 1 {M}-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Power Beam",
			'fr-fr': "Puissant Rayon",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'pt-br': "Raio de Poder",
			'de-de': "Power-Strahl"
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
		'en-us': "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	stage: "Basic",
	dexId: [884],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453308
	}
}

export default card
