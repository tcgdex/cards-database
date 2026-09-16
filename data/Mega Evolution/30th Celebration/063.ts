import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		de: "Mewtu",
		es: "Mewtwo",
		it: "Mewtwo",
		'es-mx': "Mewtwo"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Empower",
			fr: "Renforcement",
			de: "Ermächtigen",
			es: "Empoderar",
			it: "Donapotere",
			'es-mx': "Empoderamiento"
		},

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an.",
			es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia base dalla tua pila degli scarti.",
			'es-mx': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon."
		},

		cost: ["Psychic"]
	}, {
		name: {
			en: "Psydrive",
			fr: "Psykoforce",
			de: "Psycho-Antrieb",
			es: "Guía Psi",
			it: "Psicomotore",
			'es-mx': "Psicofuerza"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card