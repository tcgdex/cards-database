import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Tyrogue",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		236,
	],
	hp: 30,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
			},
			effect: {
				en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Mischievous Punch",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance. Tyrogue is now Asleep.",
			},
			damage: 30,

		},
	],






}

export default card
