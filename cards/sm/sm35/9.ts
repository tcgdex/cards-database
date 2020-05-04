import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-9",
	localId: 9,

	// Card informations
	name: {
		en: "Shining Genesect",
		fr: "Genesect Brillant",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/9/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/9/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 1213,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Reload",
			fr: "Recharge d’Énergie",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a Grass Energy from 1 of your other Pokémon to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Grass de l’un de vos Pokémon vers ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gaia Blaster",
			fr: "Explosion de Gaïa",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Grass Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Grass attachées à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
