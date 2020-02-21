import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Nidoqueen",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/31/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 538,
		type: AbilityType.POKEBODY,
		name: {
			en: "Mother Pheromone",
		},
		text: {
			en: "The attack cost of your Nidoran ♀, Nidorina, Nidoran ♂, Nidorino, and Nidoking's attack is Colorless less.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Give Aid",
		},
		text: {
			en: "If you have the same number of or less Benched Pokémon than your opponent, this attack's base damage is 50 instead of 90.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
