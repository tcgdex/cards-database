import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-238",
	localId: 238,

	// Card informations
	name: {
		en: "Heatran-GX",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/238/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/238/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 181,
		type: AbilityType.TALENT,
		name: {
			en: "Burning Road",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon was on the Bench and became your Active Pokémon this turn, you may move any number of {R} Energy attached to your Pokémon to this Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Steaming Stomp",
		},
		damage: 130
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hot Burn GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of {R} Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

