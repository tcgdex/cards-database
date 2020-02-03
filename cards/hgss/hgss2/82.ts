import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/82/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/82/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/82/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez l'un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte Évolution de niveau 1 ou 2 correspondant à ce Pokémon, placez-la sur ce dernier (cela équivaut à faire évoluer ce Pokémon). (Si vous choisissez dans votre main une carte Évolution de niveau 2, placez-la sur le Pokémon de base correspondant au lieu d'un Pokémon de niveau 1.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

