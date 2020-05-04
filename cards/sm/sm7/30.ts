import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-30",
	localId: 30,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/30/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/30/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Captivating Salsa",
			fr: "Salsa Envoûtante",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Burned and Confused.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Brûlé et Confus.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
