import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-67",
	localId: 67,

	// Card informations
	name: {
		en: "Primarina",
		fr: "Oratoria",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 730,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/67/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/67/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/67/high",
		},
	},

	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",

	abilities: [{
		id: 1248,
		type: AbilityType.TALENT,
		name: {
			en: "Harmonics",
			fr: "Harmoniques",
		},
		text: {
			en: "Whenever you attach an Energy card from your hand to 1 of your Pokémon, except with an attack, Ability, or Trainer card, attach up to 2 Energy cards to that Pokémon instead of 1.",
			fr: "Chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, excepté en raison d’une attaque, d’un talent ou d’une carte Dresseur, attachez jusqu’à 2 cartes Énergie à ce Pokémon-là au lieu d’une.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypno Splash",
			fr: "Hypnoplouf",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 80
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
