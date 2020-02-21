import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-28",
	localId: 28,

	// Card informations
	name: {
		en: "Dustox",
		fr: "Papinox",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/28/high",
		},
	},

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 1225,
		type: AbilityType.TALENT,
		name: {
			en: "Hazardous Evolution",
			fr: "Évolution Risquée",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may leave your opponent's Active Pokémon Paralyzed and Poisoned. If you do, put 3 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné et Paralysé. Dans ce cas, placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
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
