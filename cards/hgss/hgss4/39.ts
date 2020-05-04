import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-39",
	localId: 39,

	// Card informations
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/39/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/39/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rendezvous Draw",
			fr: "Pioche commune",
		},
		text: {
			en: "Each player draws and reveals the top card of his or her deck.",
			fr: "Chaque joueur pioche et dévoile la carte du dessus de son deck.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Distorted Wave",
			fr: "Vague tordue",
		},
		text: {
			en: "Before doing damage, remove 1 damage counter from the Defending Pokémon.",
			fr: "Avant d'infliger des dégâts, retirez un marqueur de dégât au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
