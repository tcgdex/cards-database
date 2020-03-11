import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-52",
	localId: 52,

	// Card informations
	name: {
		en: "Xatu",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/52/high",
		},
	},

	evolveFrom: {
		en: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Cycle",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
