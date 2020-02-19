import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Thwackey",
		fr: "Badabouin",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/12/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/12/low.png",
		}
	},

	evolveFrom: {
		en: "Grookey",
		fr: "Ouistempo",
	},

	evolveTo: [{
		en: "Rillaboom",
		fr: "Gorythmic",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 11,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Taunt",
			fr: "Provoc",
		},
		text: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Double Hit",
			fr: "Coup Double",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
		},
		damage: "60×"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
