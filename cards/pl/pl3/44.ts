import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-44",
	localId: 44,

	// Card informations
	name: {
		en: "Shedinja",
		fr: "Munja",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 292,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/44/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/44/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/44/high",
		},
	},

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 648,
		type: AbilityType.POKEBODY,
		name: {
			en: "Marvel Shell",
			fr: "Coquille merveilleuse",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Munja par les Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spike Wound",
			fr: "Blessure pointue",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
