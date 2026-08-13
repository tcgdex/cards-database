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

	dexId: [54],

	hp: 50,

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
				en: "Confusion Wave",
				fr: "Vague de confusion",
				de: "Verwirrende Welle"
			},
			effect: {
				en: "Both Psyduck and the Defending Pokémon are now Confused.",
				fr: "Psykokwak et le Pokémon Défenseur sont maintenant Confus.",
				de: "Enton und das Verteidigende Pokémon sind jetzt verwirrt."
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
				cardmarket: 275850,
				tcgplayer: 88432
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275850,
				tcgplayer: 88432
			}
		},
	],

}

export default card
