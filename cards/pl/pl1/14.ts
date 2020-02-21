import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/14/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/14/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/14/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Flower Aroma",
			fr: "Arôme floral",
		},
		text: {
			en: "Remove 2 damage counters from Shaymin. The Defending Pokémon is now Asleep.",
			fr: "Retirez à Shaymin 2 marqueurs de dégât. Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Aid",
			fr: "Aide aux dégâts",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 30 damage plus 50 more damage. Then, remove all Special Conditions from the Defending Pokémon.",
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires. Ensuite, retirez au Pokémon Défenseur tous ses États Spéciaux.",
		},
		damage: 30
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
