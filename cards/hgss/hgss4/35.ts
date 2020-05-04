import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-35",
	localId: 35,

	// Card informations
	name: {
		en: "Haunter",
		fr: "Spectrum",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/35/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/35/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/35/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Takashi Yamaguchi",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sneaky Placement",
			fr: "Placement vicieux",
		},
		text: {
			en: "Put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 2 marqueurs de dégât sur l'un des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Poison",
			fr: "Poison dodo",
		},
		text: {
			en: "The Defending Pok��mon is now Asleep and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
