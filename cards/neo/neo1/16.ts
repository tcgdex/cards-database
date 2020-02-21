import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Togetic",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/16/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Super Metronome",
		},
		text: {
			en: "Flip a coin. If heads, choose an attack of 1 of your opponent's Pokémon. Super Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic's type is still .) Togetic performs that attack. (Togetic can make that attack even if it does not have the appropriate number or type of Energy attached to it necessary to make the attack.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Togetic; if tails, this attack does nothing (not even damage).",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
