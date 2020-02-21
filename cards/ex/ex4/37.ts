import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-37",
	localId: 37,

	// Card informations
	name: {
		en: "Team Magma's Mightyena",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/37/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},

	abilities: [{
		id: 846,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call for Help",
		},
		text: {
			en: "Once during your turn (before your attack), if Team Magma's Mightyena is your Active Pokémon, you may search your deck for a Pokémon with Team Magma in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Team Magma's Mightyena is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 50
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
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
