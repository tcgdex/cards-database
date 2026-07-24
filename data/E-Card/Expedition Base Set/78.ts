import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Goldeen",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [118],

	hp: 40,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Knock Away",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
			},

			damage: "10+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Foul Odor",
				fr: "Odeur fétide",
				de: "Fäulnisgeruch"
			},
			effect: {
				en: "Both the Defending Pokémon and Gloom are now Confused (after doing damage).",
				fr: "Le Pokémon Défenseur et Ordide sont maintenant Confus (après avoir infligé les dégâts).",
				de: "Sowohl das Verteidigende Pokémon als auch Duflor sind jetzt verwirrt (nachdem der Schaden zugefügt wurde)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85781,
				cardmarket: 274953
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
