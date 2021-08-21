import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Stormy Mountains"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Once during each player’s turn, that player may search their deck for a Basic Lightning Pokemon or Basic Dragon Pokemon and put it onto their Bench. Then, that player shuffles their deck."
	},

	trainerType: "Stadium"
}

export default card