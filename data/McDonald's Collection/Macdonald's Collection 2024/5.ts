import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Hatenna",
		fr: "Bibichut",
		es: "Hatenna",
		it: "Hatenna",
		pt: "Hatenna",
		de: "Brimova"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [856],

	hp: 60,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Mumble",
				fr: "Murmure",
				es: "Murmullo",
				it: "Borbottio",
				pt: "Murmúrio",
				de: "Murmeln"
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Psyshot",
				fr: "Piqûre Psy",
				es: "Disparo Psi",
				it: "Psicosparo",
				pt: "Tiro Psíquico",
				de: "Psychoschuss"
			},
			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

