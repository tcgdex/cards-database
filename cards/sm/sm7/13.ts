import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-13",
	localId: 13,

	// Card informations
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 274,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/13/high",
		},
	},

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Clear the Room",
			fr: "Vider les Lieux",
		},
		text: {
			en: "Your opponent reveals their hand. Choose a Supporter card you find there. Your opponent shuffles that card into their deck.",
			fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez. Votre adversaire mélange cette carte avec son deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
