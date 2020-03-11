import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 612,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/16/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/16/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/16/high",
		},
	},

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Axe Slugger",
			fr: "Cognée",
		},
		text: {
			en: "If the Defending Pokémon is a Colorless Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Colorless, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top card of your deck.",
			fr: "Défaussez la carte du dessus de votre deck.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
