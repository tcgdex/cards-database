import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Magnemite",
		fr: "Magneti",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 81,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/68/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/68/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 63,
		name: "Noriko Hotta"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Switch",
			fr: "Échange magnétique",
		},
		text: {
			en: "Switch Magnemite with 1 of your Benched Pokémon.",
			fr: "Échangez Magneti avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thundershock",
			fr: "Éclair",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
