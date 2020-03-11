import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-29",
	localId: 29,

	// Card informations
	name: {
		en: "Xatu",
		fr: "Xatu",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/29/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/29/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/29/high",
		},
	},

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Future Sight",
			fr: "Prescience",
		},
		text: {
			en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
			fr: "Regardez les 5 cartes du dessus du deck de l'un des joueurs et replacez-les sur le dessus du deck de ce joueur dans l'ordre de votre choix.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Stressful Eye",
			fr: "Regard Angoissant",
		},
		text: {
			en: "Your opponent reveals his or her hand. Discard a Trainer card you find there.",
			fr: "Votre adversaire montre sa main. Défaussez une carte Dresseur que vous y trouvez.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
