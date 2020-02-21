import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-133",
	localId: 133,

	// Card informations
	name: {
		en: "Poké Radar",
		fr: "Poké radar",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/133/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/133/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck, choisissez-y autant de Pokémon que vous le voulez, montrez-les à votre adversaire et placez-les dans votre main. Replacez les autres cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
