import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-104",
	localId: 104,

	// Card informations
	name: {
		en: "Meloetta",
		fr: "Meloetta",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Miracle Harmony",
			fr: "Harmonie Miraculeuse",
		},
		text: {
			en: "Flip a coin for each of your Pokémon in play that has the Sing attack. This attack does 10 damage for each heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce pour chacun de vos Pokémon en jeu ayant l’attaque Berceuse. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
