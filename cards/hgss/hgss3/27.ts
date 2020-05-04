import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Gloom",
		fr: "Ortide",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/27/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/27/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/27/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Miracle Powder",
			fr: "Poudre miracle",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 Special Condition. The Defending Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c'est face, choisissez un État Spécial. Le Pokémon Défenseur est maintenant affecté par cet État Spécial.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
