import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Rare Candy"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.)",
		fr: "Choisisez l'un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 étant une évolution de ce Pokémon, placez-la sur ce dernier (cela équivaut à faire évoluer ce Pokémon). Vous ne pouvez pas utiliser cette carte au premier tour ou sur un Pokémon de base qui a été mis en jeu lors de ce tour."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277489,
		tcgplayer: 88592
	}
}

export default card
