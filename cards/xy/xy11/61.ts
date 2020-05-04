import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-61",
	localId: 61,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/61/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/61/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/61/high",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 1354,
		type: AbilityType.TALENT,
		name: {
			en: "Tear Away",
			fr: "Arrachement",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
