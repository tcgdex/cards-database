import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 74,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/32/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/32/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		name: {
			en: "Defense Curl",
			fr: "Boul’Armure",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
