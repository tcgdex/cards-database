import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-26",
	localId: 26,

	// Card informations
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},

	hp: 140,

	type: [
		Type.FIRE,
	],

	dexId: 655,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/26/high",
		},
	},

	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 79,
		type: AbilityType.TALENT,
		name: {
			en: "Mystical Fire",
			fr: "Feu Ensorcelé",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blaze Ball",
			fr: "Balle Incendiaire",
		},
		text: {
			en: "This attack does 20 more damage for each Fire Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Fire attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
