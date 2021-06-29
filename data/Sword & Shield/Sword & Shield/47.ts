import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		it: "Seaking",
		pt: "Seaking",
		de: "Golking"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		119,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ripping Horn",
				fr: "Corne Déchirante",
				es: "Cuerno Desgarrador",
				it: "Squarciacorno",
				pt: "Chifre Lacerante",
				de: "Reißendes Horn"
			},
			effect: {
				en: "Flip 3 coins. For each heads, discard an Energy from your opponent’s Active Pokémon.",
				fr: "Lancez 3 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				es: "Lanza 3 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				it: "Lancia tre volte una moneta. Ogni volta che esce testa, scarta un’Energia dal Pokémon attivo del tuo avversario.",
				pt: "Jogue 3 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				de: "Wirf 3 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
