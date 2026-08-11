import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [841],
	set: Set,

	name: {
		'fr-fr': "Pomdrapi",
		'de-de': "Drapfel",
		'es-es': "Flapple",
		'pt-br': "Flapple",
		'it-it': "Flapple",
		'en-us': "Flapple"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	evolveFrom: {
		'fr-fr': "Verpom",
		'de-de': "Knapfel",
		'es-es': "Applin",
		'pt-br': "Applin",
		'it-it': "Applin",
		'en-us': "Applin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Décollage",
			'de-de': "Aufwind",
			'es-es': "Levantar Vuelo",
			'pt-br': "Preparar para Decolar",
			'it-it': "In Volo",
			'en-us': "Flight Up"
		},

		effect: {
			'fr-fr': "Attachez jusqu'à 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			'de-de': "Lege bis zu 3 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an.",
			'es-es': "Une hasta 3 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			'pt-br': "Ligue até 3 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a tre carte Energia base dalla tua pila degli scarti.",
			'en-us': "Attach up to 3 basic Energy cards from your discard pile to 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			'fr-fr': "Acide Corrosif",
			'de-de': "Zersetzendes Gift",
			'es-es': "Ácido Corrosivo",
			'pt-br': "Ácido Corrosivo",
			'it-it': "Acido Corrosivo",
			'en-us': "Corrosive Acid"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
			'en-us': "Your opponent's Active Pokémon is now Burned."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple."
	},

	thirdParty: {
		cardmarket: 453448
	}
}

export default card
