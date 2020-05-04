import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-16",
	localId: 16,

	// Card informations
	name: {
		en: "Lurantis",
		fr: "Floramantis",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 754,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/16/high",
		},
	},

	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "AKIRA EGAWA",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Petal Blizzard",
			fr: "Tempête Florale",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sol Slice",
			fr: "Tranche-Soleil",
		},
		text: {
			en: "If this Pokémon has any Fire Energy attached to it, this attack does 50 more damage.",
			fr: "Si de l’Énergie Fire est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
