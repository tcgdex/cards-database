import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		de: "Porygon"
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
				fr: "Adaptation 1",
				de: "Conversion 1"
			},
			effect: {
				en: "If Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				fr: "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté incolore.",
				de: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless."
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
				fr: "Rayon psy",
				de: "Psybeam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. if heads, the Defending Pokémon is now Confused."
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
	},

	thirdParty: {
		cardmarket: 274101,
		tcgplayer: 88304
	}
}

export default card
