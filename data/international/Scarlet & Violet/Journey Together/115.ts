import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [621],
	set: Set,

	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'de-de': "Shardrago",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
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
			'en-us': "Dragon's Fury",
			'fr-fr': "Furie du Dragon",
			'es-es': "Ira Dragón",
			'de-de': "Drachenzorn",
			'it-it': "Furia del Drago",
			'pt-br': "Cólera do Dragão",
			'es-mx': "Furia del Dragón"
		},

		effect: {
			'en-us': "Attach a Basic {R} Energy card from your discard pile to 1 of your {N} Pokémon.",
			'fr-fr': "Attachez une carte Énergie {R} de base de votre pile de défausse à l'un de vos Pokémon {N}.",
			'es-es': "Une 1 carta de Energía {R} Básica de tu pila de descartes a uno de tus Pokémon {N}.",
			'de-de': "Lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an 1 deiner {N}-Pokémon an.",
			'it-it': "Assegna a uno dei tuoi Pokémon {N} una carta Energia base {R} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {R} Básica da sua pilha de descarte a 1 dos seus Pokémon {N}.",
			'es-mx': "Une 1 carta de Energía Fire Básica de tu pila de descartes a 1 de tus Pokémon Dragon."
		},

		damage: 20
	}, {
		cost: ["Fire", "Water", "Colorless"],

		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante",
			'es-es': "Garra Cuchillazo",
			'de-de': "Schlitzende Klaue",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'es-mx': "Garra Cortante"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",
	illustrator: "kawayoo",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817267,
				tcgplayer: 623542
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817267,
				tcgplayer: 623542
			}
		},
	],
}

export default card
