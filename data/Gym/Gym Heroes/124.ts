import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Narrow Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. No player may have more than 4 Pokémon on his or her Bench. When this card is played, if a player has 5 Pokémon on his or her Bench, that player chooses 1 of them and returns it and all cards attached to it to his or her hand. (If both players have to return a Pokémon, your opponent returns a Pokémon first.)",
	},
	thirdParty: {
		cardmarket: 274260,
		tcgplayer: 87679
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

