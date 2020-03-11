import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-32",
	localId: 32,

	// Card informations
	name: {
		en: "Banette",
		fr: "Branette",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/32/high",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",

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
			Type.PSYCHIC
		],
		name: {
			en: "Evolution Jammer",
			fr: "Bloqueur d'Évolution",
		},
		text: {
			en: "Your opponent can't play any Pokémon from his or her hand to evolve his or her Pokémon during his or her next turn.",
			fr: "Aucun joueur ne peut jouer de Pokémon de sa main pour faire évoluer ses Pokémon pendant son prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Curse Deeply",
			fr: "Malédiction Intense",
		},
		text: {
			en: "Put 5 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 5 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
