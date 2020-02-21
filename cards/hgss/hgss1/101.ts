import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-101",
	localId: 101,

	// Card informations
	name: {
		en: "Professor Oak's New Theory",
		fr: "Nouvelle théorie du Prof. Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/101/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/101/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Mélangez votre main dans votre deck. Ensuite, piochez 6 cartes.",
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
