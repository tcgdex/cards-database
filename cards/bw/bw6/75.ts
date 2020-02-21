import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-75",
	localId: 75,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Démolosse",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/75/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/75/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/75/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 70
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
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
