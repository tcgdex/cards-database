import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		510,
	],
	hp: 80,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Tail Trickery",
				fr: "Queue Étourdissante",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assist",
				fr: "Assistance",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of your Benched Pokémon's attacks and use it as this attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez une attaque de l'un de vos Pokémon de Banc et utilisez-la en tant que cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
