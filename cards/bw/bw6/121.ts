import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-121",
	localId: 121,

	// Card informations
	name: {
		en: "Terrakion-EX",
		fr: "Terrakium-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 639,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/121/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/121/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/121/high",
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
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pump-up Smash",
			fr: "Taurocharge",
		},
		text: {
			en: "Attach 2 basic Energy cards from your hand to your Benched Pokémon in any way you like.",
			fr: "Attachez 2 cartes Énergie de base de votre main à vos Pokémon de Banc, de la manière que vous voulez.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
