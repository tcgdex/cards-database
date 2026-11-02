import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Rocket's Moltres"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [146],

	hp: 60,

	types: [
		"Fire"
	],

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Rebirth"
			},
			effect: {
				en: "When Rocket's Moltres is Knocked Out, you may return it to your hand after discarding it. This power can't be used if Rocket's Moltres is Asleep, Confused, or Paralyzed when it is Knocked Out."
			}
		},
	],
	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Wall"
			},
			effect: {
				en: "If an attack does damage to Rocket's Moltres during your opponent's next turn (even if Rocket's Moltres is Knocked Out), Rocket's Moltres attacks your opponent's Active Pokémon for 10 damage. (Apply Weakness and Resistance.)"
			},
			damage: 40,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88781,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88781,
				cardmarket: 274148
			}
		}
	],
}

export default card
