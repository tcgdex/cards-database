import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H21",
	localId: "H21",

	// Card informations
	name: {
		en: "Nidoqueen",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/H21/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1311,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolution Helper",
		},
		text: {
			en: "Once during your turn (before you attack) if Nidoqueen is on your bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (this counts as evolving that Pokémon) Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Claw",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
