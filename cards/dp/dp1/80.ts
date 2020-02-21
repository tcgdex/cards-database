import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Duskull",
		fr: "Skélénox",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 355,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Disable",
			fr: "Entrave",
		},
		text: {
			en: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Night Shade",
			fr: "Ténèbres",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
