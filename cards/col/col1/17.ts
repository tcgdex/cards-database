import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-17",
	localId: 17,

	// Card informations
	name: {
		en: "Ninetales",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/17/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: 403,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Roast Reveal",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards. This power can't be used if Ninetales is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
