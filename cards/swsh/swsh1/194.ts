import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-194",
	localId: 194,

	// Card informations
	name: {
		en: "Sableye V",
		fr: "Ténéfix V",
	},

	hp: 170,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/194/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/194/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: {
		id: 7,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Lode Search",
			fr: "Recherche du Filon",
		},
		text: {
			en: "Put a Trainer card from your discard pile into your hand.",
			fr: "Ajoutez à votre main une carte Dresseur de votre pile de défausse.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Crazy Claws",
			fr: "Griffes Folles",
		},
		text: {
			en: "This attack does 60 more damage for each damage counter on your opponent’s Active Pokémon.",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
