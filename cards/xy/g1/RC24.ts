import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC24",
	localId: "RC24",

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC24/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC24/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC24/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fairy Friend",
			fr: "Ami Féérique",
		},
		text: {
			en: "If you have any Fairy Pokémon on your Bench, this attack does 30 more damage.",
			fr: "Si vous avez un Pokémon Fairy sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
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
