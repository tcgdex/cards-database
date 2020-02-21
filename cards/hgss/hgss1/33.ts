import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Tyrogue",
		fr: "Debugant",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 236,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/33/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/33/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
			fr: "Tant que Debugant reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Mischievous Punch",
			fr: "Coquipoing",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance. Tyrogue is now Asleep.",
			fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Debugant est maintenant Endormi.",
		},
		damage: 30
	}],







	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
