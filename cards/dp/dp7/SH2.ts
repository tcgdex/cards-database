import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-SH2",
	localId: "SH2",

	// Card informations
	name: {
		en: "Duskull",
		fr: "Duskull (different color)",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH2/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH2/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH2/high",
		},
	},

	evolveFrom: {
		fr: "Skélénox",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Counting Song",
			fr: "Comptine",
		},
		text: {
			en: "Put up to 3 damage counters on Duskull.  Then, put that many damage counters on the Defending Pokémon.",
			fr: "Placez 3 marqueurs de dégât sur Skélénox. Ensuite, placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Night Bind",
			fr: "Lien nocturne",
		},
		text: {
			en: "Flip a coin.  If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main aux Pokémon Actifs lors de son prochain tour.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
