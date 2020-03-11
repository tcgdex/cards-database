import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xya-92a",
	localId: "92a",

	// Card informations
	name: {
		fr: "Courrier du Dresseur",
	},







	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/92a/low",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/xy/xya/92a/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 4 cartes du dessus de votre deck. Vous pouvez montrer une carte Dresseur que vous y trouvez (à part Courrier du Dresseur) et l'ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "carte alternative A Jaune",
		code: "xya"
	}
}

export default card
