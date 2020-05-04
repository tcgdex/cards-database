import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/33/high",
		},
	},

	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Self-Destruct",
			fr: "Destruction",
		},
		text: {
			en: "This Pokémon does 100 damage to itself.",
			fr: "Ce Pokémon s’inflige 100 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
