import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-40",
	localId: 40,

	// Card informations
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 67,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/40/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/40/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/40/high",
		},
	},

	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Knuckle Down",
			fr: "Poing de chute",
		},
		text: {
			en: "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par les Poké-Powers, les Poké-Bodies ou tout autre effet en action sur le Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Strength",
			fr: "Force",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
