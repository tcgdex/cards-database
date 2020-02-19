import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-197",
	localId: 197,

	// Card informations
	name: {
		en: "Lillie's Poké Doll",
		fr: "Poké Poupée de Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/197/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/197/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/197/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/197/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez cette carte comme si c’était un Pokémon Colorless de base avec 30 PV. N’importe quand pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez défausser toutes les cartes qui lui sont attachées et le placer en dessous de votre deck.\n\nCette carte ne peut pas battre en retraite. Si cette carte est mise K.O., votre adversaire ne peut pas récupérer de carte Récompense pour cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

