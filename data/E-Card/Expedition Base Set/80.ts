import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Spectrum",
		de: "Alpollo"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 50,

	types: [
		"Fire"
	],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Roar",
				fr: "Cauchemar",
				de: "Nightmare"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it.",
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
				en: "Firebreathing",
				fr: "Dévorêve",
				de: "Dream Eater"
			},

			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				fr: "Si le Pokémon Défenseur n'est pas Endormi, cette attaque ne fait rien.",
				de: "If the Defending Pokémon isn't Asleep, this attack does nothing."
			},

			damage: "10+",
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86024,
				cardmarket: 274955
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
