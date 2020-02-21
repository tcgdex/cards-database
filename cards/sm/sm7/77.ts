import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-77",
	localId: 77,

	// Card informations
	name: {
		en: "Medicham",
		fr: "Charmina",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 308,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/77/high",
		},
	},

	evolveFrom: {
		en: "Meditite",
		fr: "Méditikka",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Strike of Enlightenment",
			fr: "Frappe Révélatrice",
		},
		text: {
			en: "If this Pokémon's remaining HP is 30 or less, this attack does 160 more damage.",
			fr: "S’il reste 30 PV ou moins à ce Pokémon, cette attaque inflige 160 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Spinning Kick",
			fr: "Coup Tournant",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
