import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-10",
	localId: 10,

	// Card informations
	name: {
		en: "Magneton",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/10/high",
		},
	},

	evolveFrom: {
		en: "Magnemite",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: 224,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Electromagnetic Power",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can't be used if Magneton is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "If there are any Energy cards in your discard pile, attach 1 of them to Magneton.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
