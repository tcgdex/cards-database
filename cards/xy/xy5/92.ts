import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-92",
	localId: 92,

	// Card informations
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 342,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/92/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/92/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/92/high",
		},
	},

	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 1169,
		type: AbilityType.TALENT,
		name: {
			en: "Unruly Claw",
			fr: "Pince Rebelle",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crabhammer",
			fr: "Pince-Masse",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
