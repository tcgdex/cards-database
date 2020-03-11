import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Ariados",
		fr: "Migalos",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 168,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/15/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/15/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/15/high",
		},
	},

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Life",
			fr: "Vampirisme",
		},
		text: {
			en: "Remove from Ariados the number of damage counters equal to the damage you did to the Defending Pokémon.",
			fr: "Retirez de Migalos autant de marqueurs de dégâts que de dégâts que vous avez infligés au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poisonous Saliva",
			fr: "Salive empoisonnée",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
