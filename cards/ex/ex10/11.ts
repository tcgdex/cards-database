import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-11",
	localId: 11,

	// Card informations
	name: {
		en: "Poliwrath",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/11/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 1030,
		type: AbilityType.POKEBODY,
		name: {
			en: "Spiral Swirl",
		},
		text: {
			en: "If Poliwrath is your Active Pokémon and is Knocked Out by damage from an opponent's attack, the Attacking Pokémon is now Confused.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Beatdown",
		},
		text: {
			en: "If the Defending Pokémon is a Darkness Pokémon or has Dark in its name, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Splash",
		},
		text: {
			en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 60 damage plus 30 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
