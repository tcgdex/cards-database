import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-61",
	localId: 61,

	// Card informations
	name: {
		en: "Drednaw",
		fr: "Torgamord",
	},

	hp: 130,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/61/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/61/low",
		}
	},

	evolveFrom: {
		en: "Chewtle",
		fr: "Khélocrok",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vise Bite",
			fr: "Étau Mordant",
		},
		text: {
			en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: "60+"
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jaw Lock",
			fr: "Croque Fort",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
