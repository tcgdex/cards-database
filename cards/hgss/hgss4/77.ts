import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Spoink",
		fr: "Spoink",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 325,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/77/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/77/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sleep Pearl",
			fr: "Perle dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep. Switch Spoink with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Défenseur est maintenant Endormi. Échangez Spoink avec l'un de vos Pokémon de Banc.",
		},
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
