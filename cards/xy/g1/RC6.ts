import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC6",
	localId: "RC6",

	// Card informations
	name: {
		en: "Flareon-EX",
		fr: "Pyroli-EX",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC6/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC6/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 582,
		type: AbilityType.TALENT,
		name: {
			en: "Flash Fire",
			fr: "Torche",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a Fire Energy from 1 of your Pokémon to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Fire de l'un de vos Pokémon vers ce Pokémon.",
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
		name: "Generations",
		code: "g1"
	}
}

export default card
