import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-51",
	localId: 51,

	// Card informations
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 97,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/51/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/51/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/51/high",
		},
	},

	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 509,
		type: AbilityType.TALENT,
		name: {
			en: "Goodnight, Babies",
			fr: "Bonne Nuit Mes Petits",
		},
		text: {
			en: "Once during your turn (before your attack), you may leave both Active Pokémon Asleep.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez laisser les deux Pokémon Actifs Endormis.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
