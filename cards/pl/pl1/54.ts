import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-54",
	localId: 54,

	// Card informations
	name: {
		en: "Mightyena",
		fr: "Grahyena",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 262,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/54/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/54/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/54/high",
		},
	},

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyena",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 296,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cold Feet",
			fr: "Pieds froids",
		},
		text: {
			en: "If Mightyena is affected by a Special Condition, ignore all Energy necessary to use Mightyena's attacks.",
			fr: "Si Grahyena est affecté par un État Spécial, ignorez toutes les Énergies nécessaires pour utiliser les attaques de Grahyena.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Collude",
			fr: "Association louche",
		},
		text: {
			en: "If you played any Supporter card from your hand during this turn, this attack does 20 damage plus 20 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main ce tour-ci, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Desperate Attack",
			fr: "Attaque désespérée",
		},
		text: {
			en: "If Mightyena has less Energy attached to it than the Defending Pokémon, this attack does 50 damage plus 30 more damage.",
			fr: "Si Grahyena possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
