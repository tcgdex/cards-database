import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 160,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/20/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/20/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/20/high",
		},
	},

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocodil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Tail",
			fr: "Queue tournante",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à chaque Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
