import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-4",
	localId: 4,

	// Card informations
	name: {
		en: "Deoxys δ",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 43,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Change",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Delta Reduction",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Deoxys by attacks is reduced by 30 (before applying Weakness and Resistance).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
