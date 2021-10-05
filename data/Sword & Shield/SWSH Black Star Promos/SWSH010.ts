import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Tournicoton",
		en: "Gossifleur",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Berceuse",
				en: "Sing",
				es: "Canto",
				it: "Canto",
				pt: "Sing",
				de: "Gesang"
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				en: "Your opponent’s Active Pokémon is now Asleep.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "Your opponent’s Active Pokémon is now Asleep.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It anchors itself in the ground with its single leg, then basks in the sun. After absorbing enough sunlight, its petals spread as it blooms brilliantly."
	},

	dexId: [829],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
