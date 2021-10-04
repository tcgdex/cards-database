import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Eerie Impulse",
				fr: "Ondes Étranges",
				es: "Onda Anómala",
				it: "Elettromistero",
				pt: "Impulso Misterioso",
				de: "Mystowellen"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie de l’un des Pokémon de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía de 1 de los Pokémon de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un’Energia da uno dei Pokémon del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte 1 Energia de 1 dos Pokémon do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				es: "Trueno",
				it: "Tuono",
				pt: "Trovão",
				de: "Donner"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "A now-vanished desert culture treasured these Pokémon. Appropriately, when Heliolisk came to the Galar region, treasure came with them."
	}
}

export default card
