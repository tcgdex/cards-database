import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-11",
	localId: 11,

	// Card informations
	name: {
		en: "Metagross",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/11/high",
		},
	},

	evolveFrom: {
		en: "Metang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 561,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Super Connectivity",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Link Blast",
		},
		text: {
			en: "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
