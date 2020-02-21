import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-34",
	localId: 34,

	// Card informations
	name: {
		en: "Typhlosion",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/34/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1109,
		type: AbilityType.POKEBODY,
		name: {
			en: "Burning Aura",
		},
		text: {
			en: "As long as Typhlosion is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flickering Flames",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each damage counter on Typhlosion.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
