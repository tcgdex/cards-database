import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Pomdrapi",
		de: "Drapfel",
		es: "Flapple",
		pt: "Flapple",
		it: "Flapple",
		en: "Flapple"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	evolveFrom: {
		fr: "Verpom",
		de: "Knapfel",
		es: "Applin",
		pt: "Applin",
		it: "Applin",
		en: "Applin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Décollage",
			de: "Aufwind",
			es: "Levantar Vuelo",
			pt: "Preparar para Decolar",
			it: "In Volo",
			en: "Flight Up"
		},

		effect: {
			fr: "Attachez jusqu'à 3 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			de: "Lege bis zu 3 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an.",
			es: "Une hasta 3 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			pt: "Ligue até 3 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			it: "Assegna a uno dei tuoi Pokémon in panchina fino a tre carte Energia base dalla tua pila degli scarti.",
			en: "Attach up to 3 basic Energy cards from your discard pile to 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Grass", "Fire"],

		name: {
			fr: "Acide Corrosif",
			de: "Zersetzendes Gift",
			es: "Ácido Corrosivo",
			pt: "Ácido Corrosivo",
			it: "Acido Corrosivo",
			en: "Corrosive Acid"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			en: "Your opponent's Active Pokémon is now Burned."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "It flies on wings of apple skin and spits a powerful acid. It can also change its shape into that of an apple."
	},

	thirdParty: {
		cardmarket: 453448
	}
}

export default card