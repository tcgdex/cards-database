import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/98/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/98/low",
		}
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "KEIICHIRO ITO"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
			fr: "Empal’Korne",
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
			en: "Rock Slide",
			fr: "Éboulement",
		},
		text: {
			en: "This attack also does 10 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
