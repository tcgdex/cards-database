import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-149",
	localId: 149,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/149/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/149/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that as that Energy card type until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.FIRE
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Steam Blast",
		},
		text: {
			en: "Discard an Energy card attached to Lugia.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

