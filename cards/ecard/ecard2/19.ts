import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-19",
	localId: 19,

	// Card informations
	name: {
		en: "Kingdra",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/19/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 915,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Water Cyclone",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Kingdra is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rapids",
		},
		text: {
			en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
