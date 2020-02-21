import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW22",
	localId: "BW22",

	// Card informations
	name: {
		en: "Samurott",
		fr: "Clamiral",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 503,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW22/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW22/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW22/high",
		},
	},

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 142,
		type: AbilityType.TALENT,
		name: {
			en: "Shell Armor",
		},
		text: {
			en: "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
