import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM202",
	localId: "SM202",

	// Card informations
	name: {
		en: "Amoonguss",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 591,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM202/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM202/high",
		},
	},

	evolveFrom: {
		en: "Foongus",
	},

	tags: [
		Tag.STAGE1,
	],



	abilities: [{
		id: 851,
		type: AbilityType.TALENT,
		name: {
			en: "Bursting Spores",
		},
		text: {
			en: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent's Active Pokémon Asleep and Poisoned.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venoshock",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
