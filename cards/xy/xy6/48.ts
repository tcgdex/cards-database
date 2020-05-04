import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-48",
	localId: 48,

	// Card informations
	name: {
		en: "Klefki",
		fr: "Trousselin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 707,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/48/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/48/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/48/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Look for Keys",
			fr: "Recherch'Clés",
		},
		text: {
			en: "Reveal cards from the top of your deck until you reveal an Item card. Put it into your hand. Shuffle the other cards back into your deck.",
			fr: "Montrez des cartes du dessus de votre deck jusqu'à ce que vous montriez une carte Objet. Ajoutez-la à votre main. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
