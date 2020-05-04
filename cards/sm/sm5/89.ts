import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/sm/sm5/89/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/89/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/89/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shin Nagasawa",



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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
