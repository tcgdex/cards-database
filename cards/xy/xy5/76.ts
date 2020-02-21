import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-76",
	localId: 76,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/76/high",
		},
	},

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Shower",
			fr: "Pluie de Roche",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
