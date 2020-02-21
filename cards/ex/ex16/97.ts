import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-97",
	localId: 97,

	// Card informations
	name: {
		en: "Shiftry ex",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/97/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Skill Hack",
		},
		text: {
			en: "Look at your opponent's hand and choose a Basic Pokémon or Evolution card you find there. Choose 1 of that Pokémon's attacks. Skill Hack copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Shiftry ex's type is still Darkness.) Shiftry ex performs that attack.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dirge",
		},
		text: {
			en: "Does 60 damage to each of your opponent's Benched Pokémon that has the same name as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
