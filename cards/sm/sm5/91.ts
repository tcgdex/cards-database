import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Magearna",
		fr: "Magearna",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 801,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 1346,
		type: AbilityType.TALENT,
		name: {
			en: "Change Clothes",
			fr: "Changement de Tenue",
		},
		text: {
			en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Attack",
			fr: "Attaque Qui Roule",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
