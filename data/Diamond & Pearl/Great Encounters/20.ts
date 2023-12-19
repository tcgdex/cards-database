import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
		de: "Kingler"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		99,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-masse",
				de: "Krabbhammer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Scissor Blow",
				fr: "Cou d'ciseaux",
				de: "Scherenschlag"
			},
			effect: {
				en: "If the Defending Pokémon would be Knocked Out by this attack, Kingler does 30 damage to itself.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, Krabboss s'inflige 30 dégâts.",
				de: "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, fügt Kingler sich selbst 30 Schadenspunkte zu."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
