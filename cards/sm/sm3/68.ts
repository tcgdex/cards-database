import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm3/68/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/68/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/68/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

