import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [938],
	set: Set,

	name: {
		'fr-fr': "Têtampoule",
		'en-us': "Tadbulb",
		'es-es': "Tadbulb",
		'it-it': "Tadbulb",
		'pt-br': "Tadbulb",
		'de-de': "Blipp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Énergisant",
			'en-us': "Energize",
			'es-es': "Vigorizar",
			'it-it': "Energizza",
			'pt-br': "Energizar",
			'de-de': "Energiezufuhr"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie {L} de base de votre pile de défausse à ce Pokémon.",
			'en-us': "Attach a Basic {L} Energy card from your discard pile to this Pokémon.",
			'es-es': "Une 1 carta de Energía {L} Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base {L} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {L} Básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Lege 1 Basis-{L}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Boule Éclair",
			'en-us': "Lightning Ball",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725154,
				tcgplayer: 509850,
				cardtrader: 255634
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725154,
				tcgplayer: 509850,
				cardtrader: 255634
			}
		},
	],

	illustrator: "kirisAki",

	
}

export default card
