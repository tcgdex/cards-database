import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-2",
	localId: 2,

	// Card informations
	name: {
		en: "Feraligatr δ",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/2/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 97,
		type: AbilityType.POKEBODY,
		name: {
			en: "Battle Aura",
		},
		text: {
			en: "Each of your Pokémon that has δ on its card does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
