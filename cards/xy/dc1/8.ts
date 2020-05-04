import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Team Aqua's Muk",
		fr: "Grotadmorv de la Team Aqua",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/8/high",
		},
	},

	evolveFrom: {
		en: "Team Aqua's Grimer",
		fr: "Tadmorv de la Team Aqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 57,
		type: AbilityType.TALENT,
		name: {
			en: "Sludge Festival",
			fr: "Festival de Boue",
		},
		text: {
			en: "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.",
			fr: "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de Colorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pester",
			fr: "Tarabustage",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
