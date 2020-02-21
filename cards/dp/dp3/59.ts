import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/59/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/59/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Grip and Squeeze",
			fr: "Empoigner et presser",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Guillotine",
			fr: "Guillotine puissante",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack's base damage is 10 instead of 100.",
			fr: "Lancez 2 pièces. Si vous obtenez une pile, les dégâts de base de cette attaque sont de 10 au lieu de 100.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
