import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-74",
	localId: 74,

	// Card informations
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/74/high",
		},
	},

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mind Bullet",
			fr: "Ball'Esprit",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon times the amount of Energy attached to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire multipliés par le nombre d'Énergies lui étant attachées. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
