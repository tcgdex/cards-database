import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 549,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/5/high",
		},
	},

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "You Iribi",



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
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Petal Dance",
			fr: "Danse-Fleur",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage for each heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
