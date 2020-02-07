import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Gengar",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/85/high.png",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],



	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Life Shaker",
		},
		text: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
		},
		text: {
			en: "Your opponent’s Active Pokémon is now Asleep.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

