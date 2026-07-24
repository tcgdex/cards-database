import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Magneton"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Charge"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), if Lt. Surge's Magneton is your Active Pokémon, you may take 1 Lightning Energy card attached to 1 of your Pokémon and attach it to Lt. Surge's Magneton. This power can't be used if Lt. Surge's Magneton is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Shock"
			},
			effect: {
				en: "Flip a coin. If tails, Lt. Surge's Magneton does 20 damage to itself."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86858,
				cardmarket: 274144
			}
		}
	]
}

export default card
