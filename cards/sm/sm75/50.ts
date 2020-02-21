import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-50",
	localId: 50,

	// Card informations
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},

	hp: 110,

	type: [
		Type.DRAGON,
	],

	dexId: 776,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Explosive Jet",
			fr: "Souffle Explosif",
		},
		text: {
			en: "Discard any amount of Fire Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez n’importe quel nombre d’Énergies Fire de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
