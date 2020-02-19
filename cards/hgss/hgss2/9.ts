import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Sudowoodo",
		fr: "Simularbre",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 185,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/9/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/9/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Push Over",
			fr: "Facilité",
		},
		text: {
			en: "Does 20 damage times the amount of Fighting Energy attached to Sudowoodo.",
			fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Fighting attachées à Simularbre.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rumble",
			fr: "Bagarre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

