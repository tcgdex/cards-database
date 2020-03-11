import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-100",
	localId: 100,

	// Card informations
	name: {
		en: "Claw Fossil Anorith",
		fr: "Fossile Griffe Anorith",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/100/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/100/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/100/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Anorith que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
