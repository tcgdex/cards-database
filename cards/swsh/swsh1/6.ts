import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-6",
	localId: 6,

	dexId: 547,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/6/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/6/low",
		}
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kodama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cotton Ride",
			fr: "Chevauchée Cotonneuse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			fr: "Lancez une pièce. Si c’est face, votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
