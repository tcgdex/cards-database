import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Limber",
				fr: "Échauffement",
				es: "Flexibilidad",
				it: "Scioltezza",
				pt: "Elasticidade",
				de: "Flexibilität"
			},
			effect: {
				en: "This Pokémon can’t be Paralyzed.",
				fr: "Ce Pokémon ne peut pas être Paralysé.",
				es: "Este Pokémon no puede pasar a estar Paralizado.",
				it: "Questo Pokémon non può venire paralizzato.",
				pt: "Este Pokémon não pode ser Paralisado.",
				de: "Dieses Pokémon kann nicht paralysiert werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Claw",
				fr: "Griffe Taillante",
				es: "Garra Cuchillazo",
				it: "Artigli Laceranti",
				pt: "Garra Cortadora",
				de: "Schlitzende Klaue"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
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
	}
}

export default card
