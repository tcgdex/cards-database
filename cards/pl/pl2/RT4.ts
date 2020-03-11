import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-RT4",
	localId: "RT4",

	// Card informations
	name: {
		en: "Mow Rotom",
		fr: "Motisma Tonte Niv. 46",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 479,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT4/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/RT4/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/RT4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yusuke Ohmura",

	abilities: [{
		id: 534,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Mow Shift",
			fr: "Mutation tonte",
		},
		text: {
			en: "Once during your turn (before your attack), you may use this power. Mow Rotom's type is Grass until the end of your turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Motisma Tonte est de type Grass jusqu'à la fin de votre tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mow Down",
			fr: "Faucher",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to each of your opponent's Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à chacun des Pokémon de votre adversaire.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+20"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
