import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-93",
	localId: 93,

	// Card informations
	name: {
		en: "Claydol ex",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 344,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/93/high",
		},
	},

	evolveFrom: {
		en: "Baltoy",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 94,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Type Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Claydol ex's type is Fighting until the end of your turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Boom",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Crush",
		},
		text: {
			en: "You may discard a Psychic Energy card attached to Claydol ex. If you do, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
