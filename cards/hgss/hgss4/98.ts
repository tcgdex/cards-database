import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-98",
	localId: 98,

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/98/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/98/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/98/high",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 129,
		type: AbilityType.POKEBODY,
		name: {
			en: "Insight",
			fr: "Point de vue",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent the attack cost of each of Yanmega's attacks is 0.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le coût de chaque attaque de Yanmega est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
			fr: "Attaque linéaire",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 40 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Sonicboom",
			fr: "Sonicboom",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
