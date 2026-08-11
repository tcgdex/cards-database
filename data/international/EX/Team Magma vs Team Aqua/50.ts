import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Corphish",
		fr: "Écrapince de Team Aqua",
		de: "Team Aquas Krebscorps"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [341],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Toxic Grip",
				fr: "Pince empoisonnée",
				de: "Toxic Grip"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275827,
				tcgplayer: 89781
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275827,
				tcgplayer: 89781
			}
		},
	],

}

export default card
