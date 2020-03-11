import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/50/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/50/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/50/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Tentavolve",
			fr: "Tentavolution",
		},
		text: {
			en: "If Tentacruel evolved from Tentacool during this turn, the Defending Pokémon is now Paralyzed and Poisoned.",
			fr: "Si Tentacruel a évolué en Tentacool pendant ce tour, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
