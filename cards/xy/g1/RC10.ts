import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC10",
	localId: "RC10",

	// Card informations
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC10/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC10/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 144,
		name: "kanahei"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. This Pokémon is now Asleep.",
			fr: "Soignez 30 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Pachi",
			fr: "Pachi",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
