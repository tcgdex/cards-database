import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [884],
	set: Set,

	name: {
		'fr-fr': "Duralugon",
		'en-us': "Duraludon",
		'es-es': "Duraludon",
		'it-it': "Duraludon",
		'pt-br': "Duraludon",
		'de-de': "Duraludon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	attacks: [{
		name: {
			'fr-fr': "Affuteur de Métal",
			'en-us': "Metal Sharpener",
			'es-es': "Afilador de Metales",
			'it-it': "Affilametallo",
			'pt-br': "Amolador de Metal",
			'de-de': "Metallschleifer"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon.",
			'en-us': "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			'es-es': "Une 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
			'it-it': "Assegna a uno dei tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
			'pt-br': "Ligue 1 carta de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Puissant Rayon",
			'en-us': "Power Beam",
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
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "Its body resembles polished metal, and it's both lightweight and strong. The only drawback is that it rusts easily."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539848,
				tcgplayer: 232477
			}
		},
	],
}

export default card
