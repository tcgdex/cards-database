import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-103",
	localId: 103,

	// Card informations
	name: {
		en: "Rocket's Sneasel ex",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 215,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Drag Off",
		},
		text: {
			en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 10 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Ring",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each of your Darkness Pokémon in play.\"",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
