import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-110",
	localId: 110,

	// Card informations
	name: {
		en: "Vaporeon ex",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/110/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 890,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Swirl",
		},
		text: {
			en: "Once during your turn, when you play Vaporeon ex from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle his or her hand into his or her deck. Then, your opponent draws up to 4 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Fastwave",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydrosplash",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
