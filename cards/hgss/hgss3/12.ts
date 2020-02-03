import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 426,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/12/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/12/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/12/high.png",
		},
	},

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Balloon Tackle",
			fr: "Charge Ballon",
		},
		text: {
			en: "Drifblim does 20 damage to itself.",
			fr: "Grodrive s'inflige 20 dégâts.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Away",
			fr: "Envolée",
		},
		text: {
			en: "Shuffle Drifblim and all cards attached to it back into your deck. Then, your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck. (You choose your new Active Pokémon first.)",
			fr: "Mélangez Grodrive et toutes les cartes qui lui sont attachées avec votre deck. Ensuite, votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez votre nouveau Pokémon Actif en premier.)",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

