import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-10",
	localId: 10,

	// Card informations
	name: {
		en: "Ludicolo",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/10/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 932,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Swing Dance",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Ludicolo is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Healing Steps",
		},
		text: {
			en: "You may discard as many cards as you like from your hand. If you do, remove that many damage counters from Ludicolo.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Circular Steps",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Ludicolo.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
