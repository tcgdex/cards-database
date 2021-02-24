import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Buizel",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		418,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",



	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],


	effect: {
		en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
	},


}

export default card
