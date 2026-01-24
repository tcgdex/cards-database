import { Card } from '../../../interfaces'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 1 or Stage 2 card that evolves from that Pokémon in your hand, put that card on the Basic Pokémon. (This counts as evolving that Pokémon.)",
		fr: "Choisissez 1 des Pokémon de base que vous avez en jeu. Si vous possédez dans votre main une carte de Niveau 1 ou de Niveau 2 qui évolue de ce Pokémon, placez cette carte sur le Pokémon de base (vous le faites ainsi évoluer).",
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
