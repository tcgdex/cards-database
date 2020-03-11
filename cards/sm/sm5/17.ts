import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-17",
	localId: 17,

	// Card informations
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 752,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/17/high",
		},
	},

	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 492,
		type: AbilityType.TALENT,
		name: {
			en: "Water Bubble",
			fr: "Aquabulle",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
