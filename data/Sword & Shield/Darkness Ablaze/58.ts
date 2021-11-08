import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Lightning",
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				es: "Rayo",
				it: "Fulmine",
				pt: "Relâmpago",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l'Énergie de ce Pokémon.",
				es: "Descarta todas las Energías de este Pokémon.",
				it: "Scarta tutte le Energie da questo Pokémon.",
				pt: "Descarte todas as Energias deste Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches."
	}
}

export default card
