import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
		es: "Golurk",
		it: "Golurk",
		pt: "Golurk",
		de: "Golgantes"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Fist of Justice",
				fr: "Poing de Fer Juste",
			},
			effect: {
				en: "If you have any Team Plasma Pokémon in play, this attack does nothing.",
				fr: "Si vous avez un Pokémon de la Team Plasma en jeu, cette attaque ne fait rien.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Punch",
				fr: "Poing Ombre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 281067,
		tcgplayer: 85838
	}
}

export default card
