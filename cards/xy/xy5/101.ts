import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-101",
	localId: 101,

	// Card informations
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 122,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/101/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/101/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trick",
			fr: "Tourmagik",
		},
		text: {
			en: "Move a Pokémon Tool card attached to 1 of either player's Pokémon to another of that player's Pokémon that doesn't already have a Pokémon Tool attached to it. If there is no Pokémon to move the Pokémon Tool card to, this attack does nothing.",
			fr: "Déplacez une carte Outil Pokémon attachée à un Pokémon de l'un des joueurs vers un autre de ses Pokémon auquel un Outil Pokémon n'est pas déjà attaché. S'il n'y a aucun Pokémon vers lequel déplacer la carte Outil Pokémon, cette attaque ne fait rien.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Lock Up",
			fr: "Cage",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card

