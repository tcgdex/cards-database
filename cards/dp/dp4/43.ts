import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Linoone",
		fr: "Lineon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 264,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/43/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/43/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/43/high",
		},
	},

	evolveFrom: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Switcheroo",
			fr: "Passe-Passe",
		},
		text: {
			en: "Move a Pokémon Tool card attached to 1 of your opponent's Pokémon to another of your opponent's Pokémon (excluding Pokémon that already has a Pokémon Tool attached to it). (If an effect of this attack is prevented, this attack does nothing.)",
			fr: "Déplacez une carte Outil Pokémon attachée à 1 des Pokémon de votre adversaire vers un autre de ses Pokémon (Pokémon possédant déjà une carte Outil Pokémon exclus). (Si un effet de cette attaque est annulé, cette attaque est sans effet).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
