import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW48",
	localId: "BW48",

	// Card informations
	name: {
		en: "Altaria",
		fr: "Altaria",
	},

	hp: 70,

	type: [
		Type.DRAGON,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW48/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
		fr: "Swablu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 105,
		name: "HiRON"
	},

	abilities: [{
		id: 154,
		type: AbilityType.TALENT,
		name: {
			en: "Fight Song",
			fr: "Hymne au Combat",
		},
		text: {
			en: "Your Dragon Pokémon's attacks do 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Glide",
			fr: "Glissement",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
