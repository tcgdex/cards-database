import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Interviewer's Questions",
		fr: "Questionnaire d'interview",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/77/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/77/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon Actif. Une fois votre tour terminé, défaussez cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Regardez les 8 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez les autres cartes avec votre deck.",
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
