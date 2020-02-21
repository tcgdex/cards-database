import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-7",
	localId: 7,

	// Card informations
	name: {
		en: "Nidoqueen δ",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/7/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 62,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Invitation",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Nidoqueen is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vengeance",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
