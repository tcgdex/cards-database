import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/42/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/42/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/42/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Wound",
			fr: "Blessure pointue",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.DARKNESS
		],
		name: {
			en: "Poison Experiment",
			fr: "Expérimentation empoisonnée",
		},
		text: {
			en: "You may discard a Grass or Darkness Energy attached to Cacturne. If you discard a Grass Energy, the Defending Pokémon is now Poisoned. If you discard a Darkness Energy, the Defending Pokémon is now Paralyzed.",
			fr: "Vous pouvez défausser une Énergie Grass ou Darkness attachée à Cacturne. Si vous défaussez une Énergie Grass, le Pokémon Défenseur est maintenant Empoisonné. Si vous défaussez une Énergie Darkness, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
