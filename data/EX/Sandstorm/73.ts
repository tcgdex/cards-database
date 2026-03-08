import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confusion Wave",
				fr: "Vague de confusion",
				de: "Confusion Wave"
			},
			effect: {
				en: "Both Psyduck and the Defending Pokémon are now Confused.",
				fr: "Psykokwak et le Pokémon Défenseur sont maintenant Confus.",
				de: "Both Psyduck and the Defending Pokémon are now Confused."
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

	thirdParty: {
		cardmarket: 275850,
		tcgplayer: 88432
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
