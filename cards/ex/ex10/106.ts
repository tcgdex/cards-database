import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-106",
	localId: 106,

	// Card informations
	name: {
		en: "Meganium ex",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 154,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/106/high",
		},
	},

	evolveFrom: {
		en: "Bayleef",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 1126,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Nurture and Heal",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, remove 1 damage counter from that Pokémon. This power can't be used if Meganium ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Poison",
		},
		text: {
			en: "Discard 1 Energy attached to Meganium ex. The Defending Pokémon is now Poisoned.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	},{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
