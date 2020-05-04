import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-60",
	localId: 60,

	// Card informations
	name: {
		en: "Forretress",
		fr: "Foretress",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/60/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/60/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/60/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	abilities: [{
		id: 679,
		type: AbilityType.TALENT,
		name: {
			en: "Thorn Tempest",
			fr: "Tempête d'Épines",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 1 damage counter on each of your opponent's Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez placer un marqueur de dégâts sur chacun des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Crash",
			fr: "Fer Destructeur",
		},
		text: {
			en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
