import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-89",
	localId: 89,

	// Card informations
	name: {
		en: "Solgaleo ◇",
		fr: "Solgaleo ",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/89/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/89/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Radiant Star",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "For each of your opponent's Pokémon in play, attach a Metal Energy card from your discard pile to your Pokémon in any way you like.",
		},
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Corona Impact",
			fr: "Étoile Soleil Levant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Metal de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
		damage: 160
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			fr: "Impact de Couronne",
		},
		text: {
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

