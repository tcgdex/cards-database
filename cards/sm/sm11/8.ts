import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-8",
	localId: 8,

	// Card informations
	name: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 541,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/8/high",
		},
	},

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},

	abilities: [{
		id: 1388,
		type: AbilityType.TALENT,
		name: {
			en: "Swaddling Leaves",
			fr: "Feuillage Enveloppant",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bug Bite",
			fr: "Piqûre",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
