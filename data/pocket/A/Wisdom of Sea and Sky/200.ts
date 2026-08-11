import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jasmine",
		'fr-fr': "Jasmine"
	},

	illustrator: "En Morikura",
	rarity: "Two Star",
	category: "Trainer",

	effect: {
		'en-us': "During your opponent's next turn, all of your Steelix and Skarmory ex take −50 damage from attacks from your opponent's Pokémon.",
		'fr-fr': "Pendant le prochain tour de votre adversaire, tous vos  et  subissent − 50 dégâts provenant des attaques des Pokémon de votre adversaire."
	},

	trainerType: "Supporter",
	boosters: ["ho-oh"]
}

export default card