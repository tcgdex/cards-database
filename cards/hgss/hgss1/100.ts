import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du Prof.Orme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/100/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/100/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/100/high.png",
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
			fr: "Cherchez une carte Évolution dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
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

