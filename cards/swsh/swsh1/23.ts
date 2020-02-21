import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-23",
	localId: 23,

	dexId: 38,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/23/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/23/low",
		}
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Megumi Higuchi"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flame Cloak",
			fr: "Manteau de Feu",
		},
		text: {
			en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Feu de votre pile de défausse à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Mane",
			fr: "Crinière de Feu",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
