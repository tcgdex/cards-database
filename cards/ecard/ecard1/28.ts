import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Typhlosion",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/28/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "K.  Hoshiba",

	abilities: [{
		id: 326,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Heat Up",
		},
		text: {
			en: "Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent's Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can't be used if Typhlosion is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Singe",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
