import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/33/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/33/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder Punch",
			fr: "Poing-Éclair Déchaîné",
		},
		text: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
			fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Slam",
			fr: "Tacle Foudroyant",
		},
		text: {
			en: "This Pokémon can't use Lightning Slam during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Tacle Foudroyant pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card

