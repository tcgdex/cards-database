import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-81",
	localId: 81,

	// Card informations
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 521,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/81/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/81/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/81/high",
		},
	},

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: -1,
		type: AbilityType.ANCIENTTRAIT,
		name: {
			fr: "Évolution Δ",
		},
		text: {
			fr: "Vous pouvez jouer cette carte de votre main pour faire évoluer un Pokémon pendant votre premier tour ou pendant le tour où vous le jouez.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feather Dance",
			fr: "Danse-Plume",
		},
		text: {
			en: "During your next turn, each of this Pokémon's attacks does 80 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Attack",
			fr: "Piqué",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
