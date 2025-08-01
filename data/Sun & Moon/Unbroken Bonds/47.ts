import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
		es: "Kingler",
		it: "Kingler",
		pt: "Kingler",
		de: "Kingler"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Beam",
				fr: "Bulles d’O",
				es: "Rayo Burbuja",
				it: "Bollaraggio",
				pt: "Jato de Bolhas",
				de: "Blubbstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Massive Rend",
				fr: "Déchirure Massive",
				es: "Corte Masivo",
				it: "Supersquarcio",
				pt: "Laceração Massiva",
				de: "Riesiger Riss"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 372338
	}
}

export default card
