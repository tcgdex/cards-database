import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-91",
	localId: 91,

	// Card informations
	name: {
		en: "Liepard",
		fr: "Léopardus",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 510,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/91/high",
		},
	},

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Tail Trickery",
			fr: "Queue Étourdissante",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Assist",
			fr: "Assistance",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of your Benched Pokémon's attacks and use it as this attack.",
			fr: "Lancez une pièce. Si c'est face, choisissez une attaque de l'un de vos Pokémon de Banc et utilisez-la en tant que cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
