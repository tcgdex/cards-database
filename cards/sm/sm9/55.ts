import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-55",
	localId: 55,

	// Card informations
	name: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/55/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/55/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/55/high.png",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
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
			en: "Family Rescue",
			fr: "Sauvetage Familial",
		},
		text: {
			en: "Shuffle 5 Psychic Pokémon from your discard pile into your deck.",
			fr: "Mélangez 5 Pokémon Psychic de votre pile de défausse avec votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card

