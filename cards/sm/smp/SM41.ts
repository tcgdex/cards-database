import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM41",
	localId: "SM41",

	// Card informations
	name: {
		en: "Komala",
		fr: "Dodoala",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 775,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM41/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM41/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM41/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "nagimiso",

	abilities: [{
		id: 1153,
		type: AbilityType.TALENT,
		name: {
			en: "Comatose",
			fr: "Hypersommeil",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy from your hand to it, it is now Asleep.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une Énergie de votre main, il est désormais Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Roll",
			fr: "Roulade Hypnotique",
		},
		text: {
			en: "This attack can be used if this Pokémon is Asleep. If it is not Asleep, this attack does nothing.",
			fr: "Cette attaque peut être utilisée si ce Pokémon est Endormi. S’il n’est pas Endormi, cette attaque ne fait rien.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
