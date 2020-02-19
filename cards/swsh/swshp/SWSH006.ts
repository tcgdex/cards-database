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
		en: "Rillaboom",
		fr: "Gorythmic",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		type: AbilityType.TALENT,
		name: {
			en: "Volatge Beat",
			fr: "Rythme Voltaique",
		},
		text: {
			en : "Once during your turn, you may search your deck for up to 2 Grass Energy cards and atttach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 cartes Énergie Plante, puis les attacher à l'un de vos Pokémon. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set,
}

export default card
