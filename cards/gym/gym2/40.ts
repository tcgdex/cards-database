import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Erika's Clefairy",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lunar Power",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a card that evolves from 1 of your Benched Pokémon and put that card on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Kick",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
