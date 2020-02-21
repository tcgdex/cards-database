import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-2",
	localId: 2,

	// Card informations
	name: {
		en: "Froslass",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 478,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/2/high",
		},
	},

	evolveFrom: {
		en: "Snorunt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: 277,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Snow Gift",
		},
		text: {
			en: "Once during your turn, when you play Froslass from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ground Frost",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does nothing.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
