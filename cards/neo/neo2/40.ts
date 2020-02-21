import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Igglybuff",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 174,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},

	abilities: [{
		id: 689,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Gaze",
		},
		text: {
			en: "Once during your turn (before you attack), choose 1 of your opponent's Benched Pokémon that has a Pokémon Power. That power stops working until the end of this turn. This effect ends if that Pokémon leaves the Bench. (Pokémon Power)",
		}
	}],









	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
