import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy6/32/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/32/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/32/high.png",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
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

