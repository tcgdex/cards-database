import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-125",
	localId: 125,

	// Card informations
	name: {
		en: "Beast Ball",
		fr: "Ultra Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/125/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/125/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/125/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Regardez vos cartes Récompense (actuellement face cachée). Vous pouvez montrer une carte Ultra-Chimère que vous y trouvez, l’ajouter à votre main, puis placer cette Ultra Ball à sa place. (Si vous ne montrez pas de carte Ultra-Chimère, placez cette carte dans la pile de défausse.) Mélangez ensuite vos cartes Récompense (face cachée).",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
