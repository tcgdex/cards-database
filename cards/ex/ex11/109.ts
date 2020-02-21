import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-109",
	localId: 109,

	// Card informations
	name: {
		en: "Jolteon ex",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/109/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 885,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Thunder",
		},
		text: {
			en: "Once during your turn, when you play Jolteon ex from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Second Bite",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Blast",
		},
		text: {
			en: "Discard a Lightning Energy card attached to Jolteon ex.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
