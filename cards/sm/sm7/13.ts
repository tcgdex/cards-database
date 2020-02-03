import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm7/13/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/13/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/13/high.png",
		},
	},

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

