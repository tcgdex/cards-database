import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm7/125/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/125/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



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

