import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Unown B",
		fr: "Zarbi B",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/66/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/66/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 234,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Bounce",
			fr: "BOND-BOING",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown B is on your Bench, you may flip a coin. If heads, discard all cards attached to any 1 of your Unown and shuffle that Pokémon back into your deck.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi B est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, défaussez toutes les cartes attachées à 1 de vos Zarbis et mélanger ce Pokémon à votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
