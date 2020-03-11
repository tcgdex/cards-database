import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (bas)",
	},

	hp: 140,

	type: [
		Type.FIRE,
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/91/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/91/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Detonation Spin",
			fr: "Détonations en pagaille",
		},
		text: {
			en: "Discard a Fire Energy attached to Entei & Raikou LEGEND.",
			fr: "Défaussez une carte Énergie Fire attachée à Entei & Raikou LÉGENDE.",
		},
		damage: 90
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Fall",
			fr: "Cascatonnerre",
		},
		text: {
			en: "Discard all Energy attached to Entei & Raikou LEGEND. This attack does 80 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Défaussez toutes les cartes Énergie attachées à Entei & Raikou LÉGENDE. Cette attaque inflige 80 dégâts à chaque Pokémon ayant des Poké-Powers (les vôtres et ceux de votre adversaire). Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	},{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
