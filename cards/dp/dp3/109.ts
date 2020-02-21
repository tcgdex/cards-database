import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-109",
	localId: 109,

	// Card informations
	name: {
		en: "Shuckle",
		fr: "Caratroc",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/109/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/109/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 134,
		name: "Emi Yoshida"
	},

	abilities: [{
		id: 362,
		type: AbilityType.POKEBODY,
		name: {
			en: "Pot Shell",
			fr: "Coup de coquillage",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Shuckle by your opponent's Pokémon that has any Special Energy cards attached to it.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Caratroc par les Pokémon de votre adversaire possédant des cartes Énergie spéciale.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ferment Poison",
			fr: "Poison effervescent",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. As long as the Defending Pokémon remains Poisoned by this attack, it can't use any Poké-Body.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Tant que le Pokémon Défenseur reste Empoisonné, il ne peut pas utiliser de Poké-Body.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
