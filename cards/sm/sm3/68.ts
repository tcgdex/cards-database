import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-68",
	localId: 68,

	// Card informations
	name: {
		en: "Lunatone",
		fr: "Séléroc",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 811,
		type: AbilityType.TALENT,
		name: {
			en: "Heal Block",
			fr: "Anti-Soin",
		},
		text: {
			en: "If you have Solrock in play, Pokémon (both yours and your opponent's) can't be healed.",
			fr: "Si vous avez Solaroc en jeu, les Pokémon (les vôtres et ceux de votre adversaire) ne peuvent pas être soignés.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Blast",
			fr: "Explosion Lunaire",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
