import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-3",
	localId: 3,

	// Card informations
	name: {
		en: "Dragonite δ",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/3/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 823,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Charge",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Dragonite is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Agility",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Dragonite during your opponent's next turn.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
