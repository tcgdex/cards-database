import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Conversion 1",
				fr: "Adaptation 1"
			},
			effect: {
				en: "If Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				fr: "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté incolore."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rayon psy"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "De plus en plus de gens tentent leur chance au jackpot quotidiennement pour essayer de gagner un Porygon."
	}
}

export default card
