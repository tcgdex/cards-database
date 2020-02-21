import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-42",
	localId: 42,

	// Card informations
	name: {
		en: "Wormadam Sandy Cloak",
		fr: "Cheniselle Cape Sable",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/42/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/42/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/42/high",
		},
	},

	evolveFrom: {
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 866,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sandy Cloak",
			fr: "Cape sable",
		},
		text: {
			en: "Prevent all effects of attacks, excluding damage, done to Wormadam Sandy Cloak.",
			fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Cheniselle Cape Sable.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Over",
			fr: "Facilité",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Fighting Energy attached to Wormadam Sandy Cloak.",
			fr: "Prévenez tous les effets d’une attaque, dégâts exclus, infligés à Cheniselle Cape Sable par des Pokémon de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
