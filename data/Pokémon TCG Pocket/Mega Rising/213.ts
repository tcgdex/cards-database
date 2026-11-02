import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Prank Spinner",
		fr: "Roue Farceuse"
	},

	illustrator: "Toyste Beach",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		en: "A card from among both player's hands is chosen at random, revealed to the other player, and shuffled into its owner's deck.",
		fr: "Parmi les mains des deux joueurs, une carte est choisie au hasard, révélée à l'autre joueur, puis mélangée au deck de son propriétaire."
	},

	trainerType: "Item",

	boosters: ["mega-blaziken"]
}

export default card