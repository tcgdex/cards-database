import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Carnivine",
		fr: "Vortente",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 455,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/21/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/21/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
			fr: "Engloutir",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Carnivine. If the Defending Pokémon has fewer remaining HP than Carnivine's, this attack does 60 damage instead.",
			fr: "Avant d'infliger des dégâts, comptabilisez les PV restants du Pokémon Défenseur et de Vortente. Si le Pokémon Défenseur possède moins de PV que Vortente, cette attaque inflige 60 dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Wring Out",
			fr: "Essorage",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et défaussez alors une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
