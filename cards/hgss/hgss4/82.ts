import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss4/82/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/82/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/82/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/82/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

