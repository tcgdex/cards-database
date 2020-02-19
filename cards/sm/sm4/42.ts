import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-42",
	localId: 42,

	// Card informations
	name: {
		en: "Grumpig",
		fr: "Groret",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 326,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/42/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/42/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/42/high.png",
		},
	},

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},

	abilities: [{
		id: 1204,
		type: AbilityType.TALENT,
		name: {
			en: "Own Tempo",
			fr: "Tempo Perso",
		},
		text: {
			en: "This Pokémon can't be Confused.",
			fr: "Ce Pokémon ne peut pas être Confus.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

