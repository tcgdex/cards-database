import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/32/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/32/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/32/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
		fr: "Fleurisson",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Magma Punch",
			fr: "Poing magma",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Spin",
			fr: "Danseflamme",
		},
		text: {
			en: "Discard 2 Energy attached to Typhlosion.",
			fr: "Défaussez-vous de 2 cartes Énergie attachées à Typhlosion.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
