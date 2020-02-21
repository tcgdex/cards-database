import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM124",
	localId: "SM124",

	// Card informations
	name: {
		en: "Dusk Mane Necrozma",
		fr: "Necrozma Crinière du Couchant",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM124/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM124/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Dusk Shot",
			fr: "Tir au Couchant",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon-GX or Pokémon-EX. This damage isn't affected by Weakness or Resistance.",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Rusty Claws",
			fr: "Griffes Rouillées",
		},
		text: {
			en: "If your opponent has exactly 1 Prize card remaining, this attack does 100 more damage.",
			fr: "S’il reste exactement 1 carte Récompense à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
