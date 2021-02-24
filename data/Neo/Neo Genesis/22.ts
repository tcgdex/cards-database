import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Elekid",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		239,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Playful Punch",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent's Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed.",
			},
		},
	],







}

export default card
