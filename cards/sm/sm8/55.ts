import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-55",
	localId: 55,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/55/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Memory Melt",
			fr: "Mémoire Déliquescente",
		},
		text: {
			en: "Look at your opponent's hand and put a card you find there in the Lost Zone.",
			fr: "Regardez la main de votre adversaire et placez une carte que vous y trouvez dans la Zone Perdue.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
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
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
