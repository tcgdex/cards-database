import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-37",
	localId: 37,

	// Card informations
	name: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 61,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/37/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/37/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/37/high",
		},
	},

	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Light Punch",
			fr: "Poing léger",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
