import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-133",
	localId: 133,

	// Card informations
	name: {
		en: "Bill's Analysis",
		fr: "Analyse de Léo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/133/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/133/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/133/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/133/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer jusqu’à 2 cartes Dresseur que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

