import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Elekid",
	},

	hp: 30,

	type: [
		Type.LIGHTNING,
	],

	dexId: 239,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/22/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",

	abilities: [{
		id: 903,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Playful Punch",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent's Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed.",
		}
	}],









	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
