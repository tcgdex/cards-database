import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Great Ball",
		fr: "Super Ball de la Team Aqua",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez un Pokémon de base de la Team Aqua et une carte Énergie Water de base dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		en: "Search your deck for a Basic Team Aqua Pokémon and a basic Water Energy card, reveal them, and put them into your hand. Shuffle your deck afterward."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 282538,
		tcgplayer: 97073
	}
}

export default card
