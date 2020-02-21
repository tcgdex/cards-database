import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-97",
	localId: 97,

	// Card informations
	name: {
		en: "Pokémon Collector",
		fr: "Collectionneur de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/97/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/97/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon de base, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
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
