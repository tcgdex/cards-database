import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-8",
	localId: 8,

	// Card informations
	name: {
		en: "Nidoking",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 34,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/8/high",
		},
	},

	evolveFrom: {
		en: "Nidorino",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 123,
		type: AbilityType.POKEBODY,
		name: {
			en: "Power Gene",
		},
		text: {
			en: "As long as Nidoking is in play, your attacks by Nidoran ♀, Nidorina, Nidoqueen, Nidoran ♂, and Nidorino do 10 more damage to the Defending Pokemon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Earth Poison",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Poisoned.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bound Crush",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Nidoking can't use Bound Crush during your next turn.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
