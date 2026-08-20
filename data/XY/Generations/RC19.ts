import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Swirlix",
		fr: "Sucroquin",
		de: "Flauschling"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		684,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Lick Away",
				fr: "Lèche-Lèche",
				de: "Wegschlecken"
			},
			effect: {
				en: "Remove all Special Conditions from this Pokémon.",
				fr: "Retirez tous les États Spéciaux de ce Pokémon.",
				de: "Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "My fluffy heart makes me feel like a marshmallow. A thrilling macaron full of colorful magic. Everybody's crazy about the taste of candy! ☆",
		de: "Durch mein flauschiges Herz fühle ich mich wie Zuckerwerk. Eine köstliche Praline gefüllt mit bunter Magie. Alle sind ganz verrückt nach leckeren Süßigkeiten! ☆"
	},

	thirdParty: {
		cardmarket: 288528
	}
}

export default card
