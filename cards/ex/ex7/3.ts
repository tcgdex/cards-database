import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-3",
	localId: 3,

	// Card informations
	name: {
		en: "Dark Crobat",
	},

	hp: 90,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/3/high.png",
		},
	},

	evolveFrom: {
		en: "Dark Golbat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 81,
		name: "Kyoko Koizumi"
	},

	abilities: [{
		id: 269,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Black Beam",
		},
		text: {
			en: "Once during your turn (before your attack), if Dark Crobat is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Dark Crobat is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Drain",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Dark Crobat a number of damage counters equal to the number of your opponent's Pokémon in play.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Skill Dive",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card

