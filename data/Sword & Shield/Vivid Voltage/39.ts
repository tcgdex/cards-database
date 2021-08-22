import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Drednaw",
		fr: "Torgamord",
		es: "Drednaw",
		it: "Drednaw",
		pt: "Drednaw",
		de: "Kamalm"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok"
	},

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vise Wave",
				fr: "Vague Étau",
				es: "Ola Mordedora",
				it: "Onda Serrata",
				pt: "Onda Compressora",
				de: "Klammerwelle"
			},
			effect: {
				en: "If you played Nessa from your hand during this turn, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Si vous avez joué Donna de votre main pendant ce tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Si has jugado 1 carta de Cathy de tu mano durante este turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Se hai giocato Azzurra dalla tua mano durante questo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Se você jogou Vanessa da sua mão durante este turno, o Pokémon Ativo do seu oponente ficará Paralisado.",
				de: "Wenn du Kate während dieses Zuges aus deiner Hand gespielt hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "With jaws that can shear through steel rods, this highly aggressive Pokémon chomps down on its unfortunate prey."
	}
}

export default card
