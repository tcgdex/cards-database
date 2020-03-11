import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/14/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/14/low",
		}
	},

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Anesaki Dynamic",

	abilities: [{
		id: 2,
		type: AbilityType.TALENT,
		name: {
			en: "Voltage Beat",
			fr: "Rythme Voltaïque",
		},
		text: {
			en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Plante, puis les attacher à l’un de vos Pokémon. Mélangez ensuite votre deck.",
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
