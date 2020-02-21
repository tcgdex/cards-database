import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-96",
	localId: 96,

	// Card informations
	name: {
		en: "Pokégear3.0",
		fr: "Poké Gear3.0",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/96/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/96/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/96/high",
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
			fr: "Regardez les 7 cartes du dessus de votre deck. Choisissez l’une des cartes Supporter qui s’y trouve, montrez-la à votre adversaire et placez-la dans votre main. Mélangez les autres cartes dans votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
