import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-165",
	localId: 165,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super Bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/165/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/165/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/165/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/165/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base pour le faire évoluer. Vous ne pouvez utiliser cette carte ni pendant votre premier tour ni sur un Pokémon de base qui a été joué pendant ce tour.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
