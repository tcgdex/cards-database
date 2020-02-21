import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Delcatty",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/5/high",
		},
	},

	evolveFrom: {
		en: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 223,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Draw",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard 1 Energy card from your hand. Then draw up to 3 cards from your deck. This power can't be used if Delcatty is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Max Energy Source",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to all of your Active Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
