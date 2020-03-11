import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-18",
	localId: 18,

	// Card informations
	name: {
		en: "Fearow δ",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 22,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/18/high",
		},
	},

	evolveFrom: {
		en: "Spearow",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 947,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Sign",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Delta Sign Poké-Power each turn. This power can't be used if Fearow is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
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



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
