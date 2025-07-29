import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Haunter",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Yukiko Baba",
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
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare",
				fr: "Cauchemar",
				de: "Nightmare"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],

			name: {
				en: "Dream Eater",
				fr: "Dévorêve",
				de: "Dream Eater"
			},

			effect: {
				en: "If the Defending Pokémon isn't Asleep, this attack does nothing.",
				fr: "Si le Pokémon Défenseur n'est pas Endormi, cette attaque ne fait rien.",
				de: "If the Defending Pokémon isn't Asleep, this attack does nothing."
			},

			damage: 50
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

	thirdParty: {
		cardmarket: 274955
	}
}

export default card
