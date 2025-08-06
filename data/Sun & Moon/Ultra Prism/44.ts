import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Short",
				fr: "Court Acier",
				es: "Cortocircuito Acero",
				it: "Corto Metallico",
				pt: "Curto-circuito Metálico",
				de: "Stahlschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Metal Pokémon, it is now Paralyzed.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, il est maintenant Paralysé.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Metal, este pasa a estar Paralizado.",
				it: "Se il Pokémon attivo del tuo avversario è di tipo Metal, viene paralizzato.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Metal, ele será Paralisado.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Metal-Pokémon ist, ist es jetzt paralysiert."
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Knuckle",
				fr: "Poing Volt",
				es: "Nudillo Voltio",
				it: "Pugno Volt",
				pt: "Punho de Volts",
				de: "Voltfaust"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 315974,
		tcgplayer: 157661
	}
}

export default card
