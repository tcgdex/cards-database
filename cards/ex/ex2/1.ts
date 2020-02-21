import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-1",
	localId: 1,

	// Card informations
	name: {
		en: "Armaldo",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/1/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 260,
		type: AbilityType.POKEBODY,
		name: {
			en: "Primal Veil",
		},
		text: {
			en: "As long as Armaldo is your Active Pokémon, each player can't play any Supporter cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Blade Arms",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
