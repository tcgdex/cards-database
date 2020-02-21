import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Sudowoodo",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/35/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sidestep",
		},
		text: {
			en: "If Bonsly is anywhere under Sudowoodo, flip a coin. If heads, prevent all effects of an attack, including damage, done to Sudowoodo during your opponent's next turn.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Persuade",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon. The new Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
