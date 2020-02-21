import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Chingling",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 433,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/42/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 134,
		name: "Emi Yoshida"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
		}
	}],

	attacks: [{
		name: {
			en: "Inviting Bell",
		},
		text: {
			en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
