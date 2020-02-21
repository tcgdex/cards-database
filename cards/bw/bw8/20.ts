import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-20",
	localId: 20,

	// Card informations
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 514,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/20/high",
		},
	},

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Blast",
			fr: "Explosion de Flammes",
		},
		text: {
			en: "Does 20 more damage for each Fire Energy attached to this Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
