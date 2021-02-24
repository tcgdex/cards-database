import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Nincada",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		290,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Leech Life",
			},
			effect: {
				en: "After your attack, remove from Nincada the number of damage counters equal to the damage you did to the Defending Pokémon. If Nincada has fewer damage counters than that, remove all of them.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
