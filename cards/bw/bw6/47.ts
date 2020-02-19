import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-47",
	localId: 47,

	// Card informations
	name: {
		en: "Dustox",
		fr: "Papinox",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/47/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/47/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/47/high.png",
		},
	},

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hazardous Scales",
			fr: "Écailles Fatales",
		},
		text: {
			en: "The Defending Pokémon is now Asleep, Burned, and Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Endormi, Brûlé et Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aerial Ace",
			fr: "Aéropique",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

