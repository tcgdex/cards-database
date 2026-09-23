import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Celebratory Fanfare",
	},

	illustrator: "Yuu Nishida",
	rarity: "Promo",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		en: "Once during each player's turn, that player may heal 10 damage from each of their Pokémon. If a player healed any damage in this way, their turn ends.",
	},

	variants: [
		{
			type: "holo",
			stamp: ["ace-trainer"]
		},
	],
}

export default card
