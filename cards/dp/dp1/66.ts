import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp1/66/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/66/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},

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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

