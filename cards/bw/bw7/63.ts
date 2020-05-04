import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-63",
	localId: 63,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/63/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/63/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/63/high",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",

	abilities: [{
		id: 610,
		type: AbilityType.TALENT,
		name: {
			en: "Sinister Hand",
			fr: "Main Sinistre",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another of your opponent's Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts de l'un des Pokémon de votre adversaire vers un autre des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Punch",
			fr: "Poing Ombre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
