import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 631,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/18/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/18/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Singe",
			fr: "Roussi",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Incinerate",
			fr: "Calcination",
		},
		text: {
			en: "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
