import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Xatu",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/55/high",
		},
	},

	evolveFrom: {
		en: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 294,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Healing Wind",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Active Pokémon. This power can't be used if Xatu is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyimpact",
		},
		text: {
			en: "Put 1 damage counter on each of your opponent's Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
