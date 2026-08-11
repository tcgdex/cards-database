import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Metal Coating",
			'fr-fr': "Revêtement Métal",
			'es-es': "Recubrimiento Metálico",
			'it-it': "Metalrivestimento",
			'pt-br': "Camada Metálica",
			'de-de': "Metallbeschichtung"
		},

		effect: {
			'en-us': "Attach a Basic {M} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {M} de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Une 1 carta de Energía {M} Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base {M} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {M} Básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Basis-{M}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "The steel section is Varoom's actual body. This Pokémon clings to rocks and converts the minerals within into energy to fuel its activities.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769298,
				tcgplayer: 550168
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769298,
				tcgplayer: 550168
			}
		},
	],

	illustrator: "Shigenori Negishi",

}

export default card