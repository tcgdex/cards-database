import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-68",
	localId: 68,

	// Card informations
	name: {
		en: "Unown D",
		fr: "Zarbi D",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/68/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/68/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nakaoka",

	abilities: [{
		id: 237,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Draw",
			fr: "DONNER",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown D is on your Bench, you may flip a coin. If heads, each player may draw a card. (You draw your card first.)",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi D est sur votre Banc, vous pouvez lancer une pièce. Si c'est face, chaque joueur peut piocher une carte. (Vous piochez votre carte en premier.)",
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
