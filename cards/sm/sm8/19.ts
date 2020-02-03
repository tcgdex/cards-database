import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-19",
	localId: 19,

	// Card informations
	name: {
		en: "Celebi ◇",
		fr: "Celebi ",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Time Distortion",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "Devolve any number of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leech Seed",
			fr: "Distorsion Temporelle",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			fr: "Vampigraine",
		},
		text: {
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

