import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Kabutops",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 141,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/4/high",
		},
	},

	evolveFrom: {
		en: "Kabuto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Primal Scythe",
		},
		text: {
			en: "You may discard Helix Fossil, Dome Fossil, or Old Amber from your hand. If you do, this attack does 20 damage plus 50 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Slide",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
