import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		es: "Cinderace",
		it: "Cinderace",
		pt: "Cinderace",
		de: "Liberlo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		it: "Raboot",
		pt: "Raboot",
		de: "Kickerlo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Cloak",
				fr: "Manteau de Feu",
				es: "Manto Ígneo",
				it: "Radunafuoco",
				pt: "Manto de Chamas",
				de: "Flammenumhang"
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Fire de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Fire da sua pilha de descarte a este Pokémon.",
				de: "Lege 1 Fire-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
				es: "Llama Viva",
				it: "Splendifiamma",
				pt: "Chama Reluzente",
				de: "Helle Flamme"
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
				fr: "Lancez une pièce. Si c’est pile, défaussez 2 Énergies de ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cruz, descarta 2 Energías de este Pokémon.",
				it: "Lancia una moneta. Se esce croce, scarta due Energie da questo Pokémon.",
				pt: "Jogue 1 moeda. Se sair coroa, descarte 2 Energias deste Pokémon.",
				de: "Wirf 1 Münze. Lege bei Zahl 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It juggles a pebble with its feet, turning it into a burning soccer ball. Its shots strike opponents hard and leave them scorched."
	}
}

export default card
