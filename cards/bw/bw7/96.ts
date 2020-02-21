import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-96",
	localId: 96,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-Son",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
