import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-91",
	localId: 91,

	// Card informations
	name: {
		en: "Cacturne ex",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/91/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 169,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cursed Glare",
		},
		text: {
			en: "As long as Cacturne ex is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Psybeam",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Rend",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
