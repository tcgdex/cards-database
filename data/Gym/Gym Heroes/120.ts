import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Vermilion City Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever a player attacks with a Pokémon with Lt. Surge in its name, he or she may flip a coin. If heads, and if that Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 10 more damage to the Defending Pokémon. If tails, the attacking Pokémon does 10 damage to itself in addition to whatever its attack usually does.",
	},
	thirdParty: {
		cardmarket: 274256,
		tcgplayer: 90326
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

