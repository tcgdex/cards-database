import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-99",
	localId: 99,

	// Card informations
	name: {
		en: "Walrein ex",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 365,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/99/high",
		},
	},

	evolveFrom: {
		en: "Sealeo",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 37,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Chilling Breath",
		},
		text: {
			en: "Once during your turn, when you play Walrein ex from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 70 damage plus 20 more damage. Discard that Stadium card.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
