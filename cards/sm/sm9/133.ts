import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm9/133/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/133/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer jusqu’à 2 cartes Dresseur que vous y trouvez, puis les ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
