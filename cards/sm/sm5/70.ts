import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-70",
	localId: 70,

	// Card informations
	name: {
		en: "Passimian",
		fr: "Quartermac",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 766,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1345,
		type: AbilityType.TALENT,
		name: {
			en: "Power Huddle",
			fr: "Rassemblement Puissant",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, your Passimian's attacks do 30 more damage to your opponent's Active Evolution Pokémon (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur votre Banc, les attaques de vos Quartermac infligent 30 dégâts supplémentaires au Pokémon Actif évolué de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Hurl",
			fr: "Lance-Pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
