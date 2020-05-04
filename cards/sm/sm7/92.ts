import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-92",
	localId: 92,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	abilities: [{
		id: 860,
		type: AbilityType.TALENT,
		name: {
			en: "Conductive Body",
			fr: "Corps Conducteur",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, its Retreat Cost is Colorless less for each Beldum on your Bench.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, son Coût de Retraite est diminué de Colorless pour chaque Terhal sur votre Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
