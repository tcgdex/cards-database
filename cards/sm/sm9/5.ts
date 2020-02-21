import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-5",
	localId: 5,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/5/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Destiny Stinger",
			fr: "Piqûre du Destin",
		},
		text: {
			en: "You can use this attack only if this Pokémon has any damage counters on it. Both Active Pokémon are Knocked Out.",
			fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a des marqueurs de dégâts. Les deux Pokémon Actifs sont mis K.O.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s’inflige 10 dégâts.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
