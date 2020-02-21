import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-48",
	localId: 48,

	// Card informations
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/48/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/48/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/48/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Psy Alert",
			fr: "Alerte Psychique",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Shadow Ball",
			fr: "Ball'Ombre",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
			fr: "Cette attaque inflige 40 dégâts à 1 des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
