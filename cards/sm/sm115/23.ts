import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-23",
	localId: 23,

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/23/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/23/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/23/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/23/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 147,
		type: AbilityType.TALENT,
		name: {
			en: "Electromagnetic Wall",
			fr: "Mur Électromagnétique",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
