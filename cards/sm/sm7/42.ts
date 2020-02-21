import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-42",
	localId: 42,

	// Card informations
	name: {
		en: "Huntail",
		fr: "Serpang",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 367,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/42/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Bite",
			fr: "Morsure Dangereuse",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
