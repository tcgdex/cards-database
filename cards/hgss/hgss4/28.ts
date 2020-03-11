import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/28/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/28/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/28/high",
		},
	},

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Return",
			fr: "Retour",
		},
		text: {
			en: "Draw cards until you have 6 cards in your hand.",
			fr: "Piochez jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Prize Count",
			fr: "Compteur de Récompense",
		},
		text: {
			en: "If you have more Prize cards left than your opponent, this attack does 50 damage plus 30 more damage.",
			fr: "S'il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
