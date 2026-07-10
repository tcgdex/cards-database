import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket’s Mewtwo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	dexId: [150],

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Juxtapose"
		},

		effect: {
			en: "Flip a coin. If heads, switch the number of damage counters on Rocket’s Mewtwo with the number of damage counters on the Defending Pokémon (even if it would Knock Out either Pokémon). (It’s okay if 1 of the Pokémon has no damage counters on it.)"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Hypnoblast"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psyburn"
		},

		damage: 60
	}],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,


	variants: [
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			thirdParty: {
				tcgplayer: 167080
			},
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
