import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-79",
	localId: 79,

	// Card informations
	name: {
		en: "Sandslash",
		fr: "Sablaireau",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/79/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/79/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/79/high",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 111,
		name: "BERUBURI"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sand-Attack",
			fr: "Jet de Sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
