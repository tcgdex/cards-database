import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-77",
	localId: 77,

	// Card informations
	name: {
		en: "Sage's Training",
		fr: "Entraînement de Sage",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/77/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/77/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/77/high.png",
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
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez-en 2 et ajoutez-les à votre main. Défaussez les autres cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

