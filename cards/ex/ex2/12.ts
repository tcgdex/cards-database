import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Shiftry",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/12/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 270,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fan Away",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, return 1 Energy card attached to the Defending Pokémon to your opponent's hand. This power can't be used if Shiftry is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Light Touch Throw",
		},
		text: {
			en: "Does 80 damage minus 10 damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
