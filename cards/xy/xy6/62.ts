import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-62",
	localId: 62,

	// Card informations
	name: {
		en: "Hydreigon-EX",
		fr: "Trioxhydre-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 219,
		type: AbilityType.TALENT,
		name: {
			en: "Dragon Road",
			fr: "Voie du Dragon",
		},
		text: {
			en: "If there is any Stadium card in play, the Retreat Cost of each of your Dragon Pokémon in play is ColorlessColorless less.",
			fr: "S'il y a une carte Stade en jeu, le Coût de Retraite de chacun de vos Pokémon Dragon en jeu est diminué de ColorlessColorless.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
