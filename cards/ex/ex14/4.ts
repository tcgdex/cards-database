import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-4",
	localId: 4,

	// Card informations
	name: {
		en: "Charizard δ",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/4/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 733,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Peal of Thunder",
		},
		text: {
			en: "Once during your turn, when you play Charizard from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your Pokémon. Discard the other cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Burn",
		},
		text: {
			en: "Discard all Metal Energy attached to Charizard.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
