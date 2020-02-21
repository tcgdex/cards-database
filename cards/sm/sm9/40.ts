import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-40",
	localId: 40,

	// Card informations
	name: {
		en: "Zapdos",
		fr: "Électhor",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunderous Assault",
			fr: "Assaut Orageux",
		},
		text: {
			en: "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 70 more damage. This attack's damage isn't affected by Weakness.",
			fr: "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 70 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
