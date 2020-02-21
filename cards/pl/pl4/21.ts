import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-21",
	localId: 21,

	// Card informations
	name: {
		en: "Lopunny",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 428,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/21/high",
		},
	},

	evolveFrom: {
		en: "Buneary",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 290,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Relaxing Shower",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard an Energy card from your hand. If you do, remove 1 damage counter from each of your Pokémon. This power can't be used if Lopunny is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hover Heal",
		},
		text: {
			en: "Remove all Special Conditions from Lopunny.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
