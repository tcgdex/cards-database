import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM208",
	localId: "SM208",

	// Card informations
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
	},

	hp: 150,

	type: [
		Type.LIGHTNING,
	],

	dexId: 738,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM208/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM208/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM208/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM208/high.png",
		},
	},

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 66,
		name: "Misa Tsutsui"
	},

	abilities: [{
		id: 425,
		type: AbilityType.TALENT,
		name: {
			en: "Stealthy Body",
		},
		text: {
			en: "If there is any Stadium card in play, this Pokémon has no Weakness.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electricannon",
		},
		text: {
			en: "You may discard all {L} Energy from this Pokémon. If you do, this attack does 100 more damage.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

