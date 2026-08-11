import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Blastoise EX",
		'fr-fr': "Tortank EX",
		'es-es': "Blastoise EX",
		'it-it': "Blastoise EX",
		'pt-br': "Blastoise EX",
		'de-de': "Turtok EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 180,

	types: [
		"Water",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rapid Spin",
				'fr-fr': "Tour Rapide",
				'es-es': "Giro Rápido",
				'it-it': "Rapigiro",
				'pt-br': "Giro Rápido",
				'de-de': "Turbodreher"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc. Ensuite, votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Después, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina. Poi, il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Em seguida, seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Danach tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Splash Bomb",
				'fr-fr': "Bombe Éclaboussante",
				'es-es': "Bomba Chapoteo",
				'it-it': "Bombaspruzzo",
				'pt-br': "Bomba Borrifante",
				'de-de': "Bombenplatscher"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon causará 30 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 293377,
		tcgplayer: 124034
	}
}

export default card
