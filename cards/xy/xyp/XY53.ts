import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY53",
	localId: "XY53",

	// Card informations
	name: {
		en: "Sceptile-EX",
		fr: "Jungko-EX",
	},

	hp: 170,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY53/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY53/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY53/high.png",
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



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Strong Slash",
			fr: "Tranch'Intense",
		},
		text: {
			en: "This Pokémon can't use Strong Slash during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Tranch'Intense pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

