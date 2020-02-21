import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-1",
	localId: 1,

	// Card informations
	name: {
		en: "Azumarill",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/1/high",
		},
	},

	evolveFrom: {
		en: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 268,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Froth",
		},
		text: {
			en: "Once during your turn, when you play Azumarill from your hand to evolve 1 of your Active Pokémon, you may use this power. Each Defending Pokémon is now Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Punch",
		},
		text: {
			en: "Flip a coin for each Water Energy attached to Azumarill. This attack does 20 damage plus 20 more damage for each heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
