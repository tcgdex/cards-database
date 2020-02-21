import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-1",
	localId: 1,

	// Card informations
	name: {
		en: "Aerodactyl",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/1/high",
		},
	},

	evolveFrom: {
		en: "Mysterious Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 196,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Protection",
		},
		text: {
			en: "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Power Blow",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Stroke",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
