import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-40",
	localId: 40,

	// Card informations
	name: {
		en: "Ditto",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 46,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Duplicate",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Smash Turn",
		},
		text: {
			en: "After your attack, you may switch Ditto with 1 of your Benched Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
