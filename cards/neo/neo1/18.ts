import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-18",
	localId: 18,

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
			en: "https://assets.tcgdex.net/en/neo/neo1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/18/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 685,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fire Boost",
		},
		text: {
			en: "When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to Typhlosion. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flame Wheel",
		},
		text: {
			en: "Discard 3 Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
