import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-161",
	localId: 161,

	// Card informations
	name: {
		en: "Magikarp & Wailord-GX",
		fr: "Magicarpe et Wailord-GX",
	},

	hp: 300,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Super Splash",
			fr: "Règle des ESCOUADES",
		},
		damage: 180
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Towering Splash-GX",
			fr: "Super Éclaboussure",
		},
		text: {
			en: "If this Pokémon has at least 7 extra Water Energy attached to it (in addition to this attack's cost), this attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
		},
		damage: 10
	},{
		cost: [
			Type.WATER
		],
		name: {
			fr: "Éclaboussure Imposante-GX",
		},
		text: {
			fr: "Si au moins 7 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
