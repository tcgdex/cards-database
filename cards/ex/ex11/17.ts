import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-17",
	localId: 17,

	// Card informations
	name: {
		en: "Umbreon δ",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
		Type.METAL,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/17/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 952,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Moon",
		},
		text: {
			en: "When your opponent attaches a Special Energy card from his or her hand to 1 of his or her Pokémon, put 1 damage counter on that Pokémon. You can't use more than 1 Delta Moon Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.METAL
		],
		name: {
			en: "Feint Attack",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
