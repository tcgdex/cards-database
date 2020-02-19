import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-180",
	localId: 180,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/180/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/180/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 63,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			en: "Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can’t use this card during your first turn or on a Basic Pokémon that was put into play this turn.",
			fr: "Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une Évolution de Niveau 2 de ce Pokémon-là, placez celle-ci sur le Pokémon de base pour le faire évoluer, sans passer par le Niveau 1. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon de base qui a été mis en jeu pendant ce tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
