import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-86",
	localId: 86,

	// Card informations
	name: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/86/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/86/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mach Flight",
			fr: "Vol Supersonique",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Luster Purge",
			fr: "Lumi-Éclat",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
