import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-51",
	localId: 51,

	// Card informations
	name: {
		en: "Unown [U]",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 113,
		name: "CR CG gangs"
	},

	abilities: [{
		id: 829,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Undo",
		},
		text: {
			en: "Once during your turn (before you attack), if you have Unown U, Unown N, Unown D, and Unown O on your Bench, you may return your Active Pokémon and all cards attached to it to your hand.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
