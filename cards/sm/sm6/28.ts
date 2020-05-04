import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Aurorus",
		fr: "Dragmara",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 699,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/28/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/28/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/28/high",
		},
	},

	evolveFrom: {
		en: "Amaura",
		fr: "Amagara",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frost Wall",
			fr: "Mur de Givre",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard Burn",
			fr: "Blizzard Étourdissant",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
