import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-123",
	localId: 123,

	// Card informations
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 17,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/123/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/123/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/123/high",
		},
	},

	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1323,
		type: AbilityType.TALENT,
		name: {
			en: "Air Mail",
			fr: "Courrier Aérien",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card on the bottom of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck, puis ajouter l’une d’entre elles à votre main. Placez l’autre carte en dessous de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
