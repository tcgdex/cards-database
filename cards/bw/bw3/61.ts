import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-61",
	localId: 61,

	// Card informations
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 526,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/61/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/61/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/61/high",
		},
	},

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Core Cannon",
			fr: "Super Canon",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon for each Fighting Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à 1 des Pokémon de votre adversaire pour chaque Énergie Fighting attachée à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Gem",
			fr: "Rayon Gemme",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
