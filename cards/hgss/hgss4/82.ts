import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/82/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/82/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Illumisile",
			fr: "Lumissile",
		},
		text: {
			en: "If you don't have Illumise in play, this attack does nothing. Choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous ne disposez pas de Lumivole en jeu, cette attaque ne fait rien. Choisissez l'un des Pokémon de Banc de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Firefly Light",
			fr: "Lumière de Luciole",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
