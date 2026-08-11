import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Erika's Bellsprout"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [69],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Soak Up"
			},
			effect: {
				en: "Once during your turn (before your attack), you may take up to 2 Grass Energy cards attached to your other Pokémon and attach them to Erika's Bellsprout. This power can't be used if Erika's Bellsprout is Asleep, Confused, or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stretch Vine"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon, and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85283,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85283,
				cardmarket: 274306
			}
		},
	],
}

export default card
