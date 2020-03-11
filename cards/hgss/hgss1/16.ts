import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 12,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/16/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/16/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/16/high",
		},
	},

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cure Powder",
			fr: "Poudre de soins",
		},
		text: {
			en: "Remove 3 damage counters from each of your Pokémon.",
			fr: "Retirez 3 marqueurs de dégâts de chacun de vos Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
		},
		damage: 60
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
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
