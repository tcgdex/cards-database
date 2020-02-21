import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Team Aqua's Manectric",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
		Type.DARKNESS,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 153,
		name: "K. Utsunomiya"
	},

	abilities: [{
		id: 1116,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Power Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may move any number of basic Energy cards attached to 1 of your Pokémon with Team Aqua in its name to another of your Pokémon. This power can't be used if Team Aqua's Manectric is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderspark",
		},
		text: {
			en: "Does 10 damage to each Benched Pokémon (yours and your opponent's) that has Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
