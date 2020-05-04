import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-123",
	localId: 123,

	// Card informations
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/123/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/123/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/123/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/123/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",

	abilities: [{
		id: 660,
		type: AbilityType.TALENT,
		name: {
			en: "Second Coat",
			fr: "Seconde Couche",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch a basic Energy card attached to your Active Pokémon with a different type of basic Energy card from your discard pile.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger une carte Énergie de base attachée à votre Pokémon Actif avec un différent type de carte Énergie de base de votre pile de défausse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
