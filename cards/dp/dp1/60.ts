import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 112,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/60/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/60/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/60/high.png",
		},
	},

	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Storm Up",
			fr: "La tempête se lève",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 damage plus 20 more damage. Discard that Stadium card.",
			fr: "Si une carte Stade est en jeu, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez cette carte Stade.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crash Impact",
			fr: "Cratère",
		},
		text: {
			en: "Rhydon does 10 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
			fr: "Rhinoféros s'inflige 10 dégâts. Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

