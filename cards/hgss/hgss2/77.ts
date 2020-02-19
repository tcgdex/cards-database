import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/77/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/77/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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

