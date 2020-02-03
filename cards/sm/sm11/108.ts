import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-108",
	localId: 108,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/108/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/108/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/108/high.png",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spore",
			fr: "Spore",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pre-Dawn Strike",
			fr: "Frappe Matinale",
		},
		text: {
			en: "If your opponent's Active Pokémon is Asleep, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

