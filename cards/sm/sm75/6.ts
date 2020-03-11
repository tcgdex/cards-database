import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-6",
	localId: 6,

	// Card informations
	name: {
		en: "Blaziken",
		fr: "Braségali",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 257,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/6/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/6/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/6/high",
		},
	},

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 221,
		type: AbilityType.TALENT,
		name: {
			en: "Firestarter",
			fr: "Pyroteknik",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Stream",
			fr: "Courant de Feu",
		},
		text: {
			en: "Discard a Fire Energy from this Pokémon. This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez une Énergie Fire de ce Pokémon. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
