import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},
	stage: "Stage1",


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
				en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida a 1 de los Pokémon de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
				pt: "Jogue uma moeda. Se sair cara, descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
				de: "Wirf 1 Münze. Lege bei \"Kopf\" 1 an ein gegnerisches Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
