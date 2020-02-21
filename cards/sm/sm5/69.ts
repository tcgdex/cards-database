import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-69",
	localId: 69,

	// Card informations
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/69/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/69/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/69/high",
		},
	},

	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dust Cannon",
			fr: "Canon Poussière",
		},
		text: {
			en: "This attack does 10 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
