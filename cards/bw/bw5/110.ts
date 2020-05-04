import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-110",
	localId: 110,

	// Card informations
	name: {
		en: "Archeops",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 567,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/110/high",
		},
	},

	evolveFrom: {
		en: "Archen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 452,
		type: AbilityType.TALENT,
		name: {
			en: "Ancient Power",
		},
		text: {
			en: "Each player can't play any Pokémon from his or her hand to evolve his or her Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
