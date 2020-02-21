import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-24",
	localId: 24,

	// Card informations
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/24/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/24/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		name: {
			en: "Pick Out",
			fr: "Choisir",
		},
		text: {
			en: "Choose 1 face-down Prize card (yours or your opponent's) and put it face up. If that card is a Supporter card, use the effect of that card as the effect of this attack. (That card remains face up for the rest of the game.)",
			fr: "Choisissez 1 carte Récompense face cachée (1 des vôtres ou 1 de celles de votre adversaire) et retournez-la. Si c'est une carte Supporter, utilisez l'effet de cette carte comme l'effet de cette attaque. (Cette carte reste retournée jusqu'à la fin de la partie.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Jaw Bite",
			fr: "Morsure de mâchoire",
		},
		text: {
			en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage.",
			fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
