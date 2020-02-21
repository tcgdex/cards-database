import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-47",
	localId: 47,

	// Card informations
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/47/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/47/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/47/high",
		},
	},

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Withdraw",
			fr: "Repli",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Cloyster by attacks during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Crustabri par des attaques lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Spine Missile",
			fr: "Missile dorsal",
		},
		text: {
			en: "Flip 4 coins. For each heads, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 4 pièces. Pour chaque face, choisissez un Pokémon en jeu de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous pouvez choisir le même Pokémon plus d'une fois).  (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
