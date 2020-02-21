import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-6",
	localId: 6,

	// Card informations
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/6/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/6/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/6/high",
		},
	},

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hundred Furious Lashes",
			fr: "Multifouets Furieux",
		},
		text: {
			en: "Does 30 damage times the amount of Grass Energy attached to this Pokémon. This Pokémon can't use Hundred Furious Lashes during your next turn.",
			fr: "Inflige 30 dégâts multipliés par le nombre d'Énergies Grass attachées à ce Pokémon. Ce Pokémon ne peut pas utiliser Multifouets Furieux pendant votre prochain tour.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
