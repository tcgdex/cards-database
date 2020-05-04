import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-76",
	localId: 76,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Rapion",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/76/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/76/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Clamp",
			fr: "Griffe paralysante",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
