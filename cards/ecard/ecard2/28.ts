import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-28",
	localId: 28,

	// Card informations
	name: {
		en: "Porygon2",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/28/high.png",
		},
	},

	evolveFrom: {
		en: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},

	abilities: [{
		id: 845,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Backup",
		},
		text: {
			en: "Once during your turn (before your attack), if you have 2 or fewer cards in your hand, you may draw cards until you have exactly 3 cards in your hand. This power can't be used if Porygon2 is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnotic Ray",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

