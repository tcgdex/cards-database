import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-29",
	localId: 29,

	// Card informations
	name: {
		en: "Golem",
		fr: "Grolem",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/29/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/29/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/29/high",
		},
	},

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Double Throw",
			fr: "Double lancer",
		},
		text: {
			en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 2 des Pokémon de votre adversaire. Cette attaque leur inflige 30 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Rock",
			fr: "Pierre mégatonne",
		},
		text: {
			en: "You may do 40 damage instead of 80 to the Defending Pokémon. If you do, during your opponent's next turn, any damage done to Golem by attacks is reduced by 40 (after applying Weakness and Resistance).",
			fr: "Vous pouvez infliger 40 dégâts au lieu de 80 au Pokémon Défenseur. Lors du prochain tour de votre adversaire, tous dégâts infligés à Grolem par des attaques sont alors réduits de 40 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
