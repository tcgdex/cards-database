import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-40",
	localId: 40,

	// Card informations
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 545,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/40/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/40/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/40/high",
		},
	},

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Claws",
			fr: "Griffes Toxiques",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Horn",
			fr: "Corne Sauvage",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
