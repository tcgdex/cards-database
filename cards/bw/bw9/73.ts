import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-73",
	localId: 73,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/73/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/73/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/73/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Slayer",
			fr: "Dragon Slayer",
		},
		text: {
			en: "If the Defending Pokémon is a Dragon Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Dragon, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
