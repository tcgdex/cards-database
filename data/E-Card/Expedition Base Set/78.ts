import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Gloom",
		fr: "Ortide",
		de: "Duflor"
	},

	illustrator: "Yuichi Sawayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		44,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'herbe",
				de: "Rasierblatt"
			},

			damage: 20,

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
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274953,
		tcgplayer: 85781
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
