import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-16",
	localId: 16,

	// Card informations
	name: {
		en: "Dark Muk",
	},

	hp: 70,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/16/high",
		},
	},

	evolveFrom: {
		en: "Grimer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 673,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sticky Goo",
		},
		text: {
			en: "As long as Dark Muk is your Active Pokémon, your opponent pays ColorlessColorless more to retreat his or her Active Pokémon.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slimy Water",
		},
		text: {
			en: "Does 10 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).\"",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Acidic Poison",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Poisoned.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
