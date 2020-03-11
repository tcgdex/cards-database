import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Herdier",
		fr: "Ponchien",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 507,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/104/high",
		},
	},

	evolveFrom: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",

	abilities: [{
		id: 1356,
		type: AbilityType.TALENT,
		name: {
			en: "Treasure Hunt",
			fr: "Chasse au Trésor",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put an Item card from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter une carte Objet de votre pile de défausse à votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
