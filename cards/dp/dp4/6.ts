import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-6",
	localId: 6,

	// Card informations
	name: {
		en: "Porygon-Z",
		fr: "Porygon-Z",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 474,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/6/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/6/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/6/high",
		},
	},

	evolveFrom: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 426,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Conversion",
			fr: "Adaptation",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a basic Energy card from your hand. Porygon-Z is the same type as that Energy card until the end of your turn. This power can't be used if Porygon-Z is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Énergie de base de votre main. Porygon-Z est du même type que cette carte Énergie jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Porygon-Z est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
