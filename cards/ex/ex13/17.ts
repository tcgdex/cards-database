import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-17",
	localId: 17,

	// Card informations
	name: {
		en: "Vileplume δ",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
		Type.METAL,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/17/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 768,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Poison Pollen",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer card in your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
