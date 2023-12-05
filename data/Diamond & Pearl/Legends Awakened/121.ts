import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		325,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale psy",
				de: "Psystrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Faire des bonds",
				de: "Sprungfeder"
			},
			effect: {
				en: "You may switch Spoink with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Spoink avec 1 des Pokémon de votre Banc.",
				de: "Du kannst Spoink gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
