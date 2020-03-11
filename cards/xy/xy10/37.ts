import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-37",
	localId: 37,

	// Card informations
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/37/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/37/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/37/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 880,
		type: AbilityType.TALENT,
		name: {
			en: "Bodyguard",
			fr: "Garde du Corps",
		},
		text: {
			en: "Prevent all effects of attacks done to you or your hand by your opponent's Pokémon. Remove any existing effects.",
			fr: "Évitez tous les effets d'attaques infligés à vous-même ou à votre main par les Pokémon de votre adversaire. Retirez tous les effets déjà en action.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bonemerang",
			fr: "Osmerang",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
