import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swshp'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `swshp-${localId}`,
	localId: localId,

	// Card informations
	name: {
		fr: "Pashmilla",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},

	abilities: [{
		type: AbilityType.TALENT,
		name: {
			fr: "Faire Avec",
		},
		text: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes."
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Assistance Énergétique"
		},
		text: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc."
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
