import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-212",
	localId: 212,

	// Card informations
	name: {
		en: "Zamazenta V",
		fr: "Zamazenta V",
	},

	hp: 230,

	type: [
		Type.METAL,
	],

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: {
		id: 61,
		name: "aky CG Works"
	},

	abilities: [{
		id: -1,
		type: AbilityType.TALENT,
		name: {
			en: "Dauntless Shield",
			fr: "Égide Inflexible",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon VMAX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-VMAX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Assault Tackle",
			fr: "Tacle Assaillant",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.RareRainbow,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
