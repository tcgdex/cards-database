import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-33",
	localId: 33,

	// Card informations
	name: {
		en: "Octillery",
		fr: "Octillery",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 224,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/33/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/33/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/33/high",
		},
	},

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 656,
		type: AbilityType.TALENT,
		name: {
			en: "Abyssal Hand",
			fr: "Main Abyssale",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 5 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hug",
			fr: "Câlin",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
