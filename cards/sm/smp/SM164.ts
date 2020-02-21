import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM164",
	localId: "SM164",

	// Card informations
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM164/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM164/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM164/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM164/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},

	abilities: [{
		id: 744,
		type: AbilityType.TALENT,
		name: {
			en: "Power Suction",
			fr: "Succion Puissante",
		},
		text: {
			en: "Once during your turn (before your attack), you may move an Energy from 1 of your Pokémon to 1 of your Deoxys.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de l’un de vos Pokémon vers l’un de vos Deoxys.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psycho Boost",
			fr: "Psycho Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psycho Boost attack's base damage is 50.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Psycho Boost de ce Pokémon sont de 50.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
