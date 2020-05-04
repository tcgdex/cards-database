import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-97",
	localId: 97,

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/97/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/97/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/97/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/97/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hasuno",

	abilities: [{
		id: 494,
		type: AbilityType.TALENT,
		name: {
			en: "Distortion Door",
			fr: "Porte Distorsion",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. If you do, put 1 damage counter on 2 of your opponent's Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Dans ce cas, placez un marqueur de dégâts sur 2 des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
		},
		text: {
			en: "Put 4 damage counters on 1 of your Pokémon.",
			fr: "Placez 4 marqueurs de dégâts sur l’un de vos Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
