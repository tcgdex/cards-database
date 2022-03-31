import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Blastoise EX",
		fr: "Tortank EX",
		es: "Blastoise EX",
		it: "Blastoise EX",
		pt: "Blastoise EX",
		de: "Turtok EX"
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
				en: "Rapid Spin",
				fr: "Tour Rapide",
				es: "Giro Rápido",
				it: "Rapigiro",
				pt: "Giro Rápido",
				de: "Turbodreher"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc. Ensuite, votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Después, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina. Poi, il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon do Banco. Em seguida, seu oponente troca o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Danach tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				en: "Splash Bomb",
				fr: "Bombe Éclaboussante",
				es: "Bomba Chapoteo",
				it: "Bombaspruzzo",
				pt: "Bomba Borrifante",
				de: "Bombenplatscher"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair coroa, esse Pokémon causará 30 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
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
	stage: "Basic"
}

export default card
