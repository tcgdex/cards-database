import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-46",
	localId: 46,

	// Card informations
	name: {
		en: "Swellow",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/46/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 604,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Drive Off",
		},
		text: {
			en: "Once during your turn (before your attack), if Swellow is your Active Pokémon, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent picks the Benched Pokémon to switch. This power can't be used if Swellow is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
