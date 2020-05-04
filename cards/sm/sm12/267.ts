import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-267",
	localId: 267,

	// Card informations
	name: {
		en: "Lillie's Poké Doll",
		fr: "Poké Poupée de Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/267/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/267/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/267/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/267/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Studio Bora Inc.",



	attacks: [{
		name: {},
		text: {
			fr: "Jouez cette carte comme si c’était un Pokémon Colorless de base avec 30 PV. N’importe quand pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser toutes les cartes qui lui sont attachées et le placer en dessous de votre deck.\n\nCette carte ne peut pas battre en retraite. Si cette carte est mise K.O., votre adversaire ne peut pas récupérer de carte Récompense pour cette carte.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
