import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-68",
	localId: 68,

	// Card informations
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/68/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/68/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/68/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Reflect",
			fr: "Protection",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Corkscrew",
			fr: "Vrille Psy",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
