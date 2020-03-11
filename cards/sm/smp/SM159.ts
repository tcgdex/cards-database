import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM159",
	localId: "SM159",

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
			en: "https://assets.tcgdex.net/en/sm/smp/SM159/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM159/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM159/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM159/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
