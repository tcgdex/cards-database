import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu-ex",
		'en-us': "Pikachu ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'de-de': "Pikachu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Pika-Poing",
			'en-us': "Pika Punch",
			'es-es': "Pika Puño",
			'it-it': "Pika Pugno",
			'pt-br': "Soco Pikachu",
			'de-de': "Pikahieb"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'fr-fr': "Éclair Dynamique",
			'en-us': "Dynamic Bolt",
			'es-es': "Rayo Dinámico",
			'it-it': "Fulmine Dinamico",
			'pt-br': "Raio Dinâmico",
			'de-de': "Dynamischer Blitz"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies de ce Pokémon.",
			'en-us': "Flip a coin. If tails, discard all Energy from this Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
			'it-it': "Lancia una moneta. Se esce croce, scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
			'de-de': "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715538,
				tcgplayer: 497474,
				cardtrader: 248654
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785463
			}
		},
	],

	suffix: "ex",
	illustrator: "N-DESIGN Inc.",

	
}

export default card
