import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Dustox",
		fr: "Papinox",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		269,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hazardous Scales",
				fr: "Écailles Fatales",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep, Burned, and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
