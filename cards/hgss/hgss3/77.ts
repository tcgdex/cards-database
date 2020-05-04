import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss3/77/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/77/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Masakazu Fukuda",



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







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
