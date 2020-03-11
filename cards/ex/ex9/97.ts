import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-97",
	localId: 97,

	// Card informations
	name: {
		en: "Raichu ex",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/97/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 936,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rai-shield",
		},
		text: {
			en: "Damage done to any of your Raichu ex in play by attacks from your opponent's Pokémon-ex is reduced by 30 (after applying Weakness and Resistance). You can't use more than 1 Rai-shield Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Power Short",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If that Pokémon has Poké-Powers, this attack does 30 damage plus 20 more damage.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pika Bolt",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
