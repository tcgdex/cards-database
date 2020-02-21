import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-17",
	localId: 17,

	// Card informations
	name: {
		en: "Shuckle-GX",
		fr: "Caratroc-GX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1244,
		type: AbilityType.TALENT,
		name: {
			en: "Protective Shell",
			fr: "Carapace Protectrice",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have 2 or fewer Energy attached to them.",
			fr: "Évitez tous les dégâts d’attaques infligés à ce Pokémon par les Pokémon de votre adversaire auxquels sont attachées 2 Énergies ou moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Triple Poison",
			fr: "Triple Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wrap-GX",
			fr: "Ligotage-GX",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
