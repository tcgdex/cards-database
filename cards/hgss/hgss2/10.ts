import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-10",
	localId: 10,

	// Card informations
	name: {
		en: "Torterra",
		fr: "Torterra",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 389,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/10/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/10/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/10/high",
		},
	},

	evolveFrom: {
		en: "Grotle",
		fr: "Boskara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Drain",
			fr: "Giga-sangsue",
		},
		text: {
			en: "Remove from Torterra the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Retirez de Torterra un nombre de marqueurs de dégât équivalant aux dégâts que vous avez infligés au Pokémon Défenseur.",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
			fr: "Écras'terre",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
