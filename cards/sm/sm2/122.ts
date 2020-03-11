import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-122",
	localId: 122,

	// Card informations
	name: {
		en: "Energy Loto",
		fr: "Loterie d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/122/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/122/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/122/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/122/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck. Vous pouvez montrer une carte Énergie que vous y trouvez et l’ajouter à votre main. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
