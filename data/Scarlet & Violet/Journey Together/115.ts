import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		es: "Druddigon",
		de: "Shardrago",
		it: "Druddigon",
		pt: "Druddigon",
		'es-mx': "Druddigon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dragon's Fury",
			fr: "Furie du Dragon",
			es: "Ira Dragón",
			de: "Drachenzorn",
			it: "Furia del Drago",
			pt: "Cólera do Dragão",
			'es-mx': "Furia del Dragón"
		},

		effect: {
			en: "Attach a Basic {R} Energy card from your discard pile to 1 of your {N} Pokémon.",
			fr: "Attachez une carte Énergie {R} de base de votre pile de défausse à l'un de vos Pokémon {N}.",
			es: "Une 1 carta de Energía {R} Básica de tu pila de descartes a uno de tus Pokémon {N}.",
			de: "Lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an 1 deiner {N}-Pokémon an.",
			it: "Assegna a uno dei tuoi Pokémon {N} una carta Energia base {R} dalla tua pila degli scarti.",
			pt: "Ligue uma carta de Energia {R} Básica da sua pilha de descarte a 1 dos seus Pokémon {N}.",
			'es-mx': "Une 1 carta de Energía Fire Básica de tu pila de descartes a 1 de tus Pokémon Dragon."
		},

		damage: 20
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			de: "Schlitzende Klaue",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			'es-mx': "Garra Cortante"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "kawayoo"
}

export default card