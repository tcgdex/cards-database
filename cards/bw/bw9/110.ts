import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-110",
	localId: 110,

	// Card informations
	name: {
		en: "Thundurus-EX",
		fr: "Fulguris-EX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/110/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/110/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Raiden Knuckle",
			fr: "Appel Foudroyant",
		},
		text: {
			en: "Attach an Energy card from your discard pile to 1 of your Benched Team Plasma Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à 1 de vos Pokémon de la Team Plasma sur votre Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Noise",
			fr: "Grondement Tonitruant",
		},
		text: {
			en: "If this Pok��mon has any Plasma Energy attached to it, discard an Energy attached to the Defending Pokémon.",
			fr: "Si de l'Énergie Plasma est attachée à ce Pokémon, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

