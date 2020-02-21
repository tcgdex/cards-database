import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-11",
	localId: 11,

	// Card informations
	name: {
		en: "Shedinja",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/11/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 249,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wonder Guard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Damage Curse",
		},
		text: {
			en: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
