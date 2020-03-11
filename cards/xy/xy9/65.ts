import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-65",
	localId: 65,

	// Card informations
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 709,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/65/high",
		},
	},

	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 36,
		type: AbilityType.TALENT,
		name: {
			en: "Nervous Seed",
			fr: "Graine Angoisse",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent's Basic Pokémon's attacks cost Colorless more.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques des Pokémon de base de votre adversaire coûtent Colorless de plus.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
		},
		text: {
			en: "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
