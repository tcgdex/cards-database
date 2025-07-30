import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
		de: "Sonderbonbon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez un des Pokémon de base que vous avez en jeu. Si vous avez dans votre main une carte Niveau 1 ou Niveau 2 qui évolue de ce Pokémon, placez-la sur ce Pokémon. (Vous le faites ainsi évoluer).",
		de: "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.)"
	},

	thirdParty: {
		cardmarket: 275865,
		tcgplayer: 88589
	}
}

export default card
