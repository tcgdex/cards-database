import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-33",
	localId: 33,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/33/high",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 1171,
		type: AbilityType.TALENT,
		name: {
			en: "Weed Out",
			fr: "Filtrage",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 3 of your Benched Pokémon. Then, discard your other Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir 3 de vos Pokémon de Banc. Ensuite, défaussez vos autres Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Destruction",
			fr: "Destruction Sombre",
		},
		text: {
			en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 120
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
