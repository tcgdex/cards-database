import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-11",
	localId: 11,

	// Card informations
	name: {
		en: "Metagross",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/11/high",
		},
	},

	evolveFrom: {
		en: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 529,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Metal Juncture",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Metal Energy card attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Squared Attack",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
