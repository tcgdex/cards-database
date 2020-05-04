import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/9/high",
		},
	},

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy from this Pokémon and heal all damage from it.",
			fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
