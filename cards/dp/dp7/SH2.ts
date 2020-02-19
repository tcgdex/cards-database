import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp7/SH2/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/SH2/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/SH2/high.png",
		},
	},

	evolveFrom: {
		fr: "Skélénox",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



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

