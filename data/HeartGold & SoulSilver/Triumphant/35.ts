import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement vicieux",
				de: "Heimlichtuerei"
			},
			effect: {
				en: "Put 2 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Placez 2 marqueurs de dégât sur l’un des Pokémon de votre adversaire.",
				de: "Lege 2 Schadensmarken auf 1 Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleep Poison",
				fr: "Poison dodo",
				de: "Schlafgift"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				de: "Das Verteidigende Pokémon schläft jetzt und ist vergiftet."
			},

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
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
