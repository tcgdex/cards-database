import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-53",
	localId: 53,

	// Card informations
	name: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/53/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/53/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 1228,
		type: AbilityType.TALENT,
		name: {
			en: "Secret Alleyway",
			fr: "Allée Secrète",
		},
		text: {
			en: "If you have any Fairy Pokémon in play, this Pokémon has no Retreat Cost.",
			fr: "Si vous avez au moins un Pokémon Fairy en jeu, ce Pokémon n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
