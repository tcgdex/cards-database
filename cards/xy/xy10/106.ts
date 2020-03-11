import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-106",
	localId: 106,

	// Card informations
	name: {
		en: "Old Amber Aerodactyl",
		fr: "Vieil Ambre Ptéra",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/106/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/106/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/106/high",
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
			fr: "Regardez les 7 cartes du dessous de votre deck. Vous pouvez montrer un Ptéra que vous y trouvez et le placer sur votre Banc. Mélangez les autres cartes avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
