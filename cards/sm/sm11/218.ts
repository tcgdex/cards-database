import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-218",
	localId: 218,

	// Card informations
	name: {
		en: "Slowpoke & Psyduck-GX",
		fr: "Ramoloss et Psykokwak-GX",
	},

	hp: 250,

	type: [
		Type.WATER,
	],

	dexId: 54,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/218/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/218/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/218/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/218/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Ditch and Splash",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Thrilling Times-GX",
			fr: "Défausser et Éclabousser",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra Water Energy attached to it (in addition to this attack's cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez autant de cartes Supporter que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			fr: "Temps Heureux-GX",
		},
		text: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 100 dégâts supplémentaires. Si au moins 6 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), lancez 10 pièces à la place, et cette attaque inflige 100 dégâts supplémentaires pour chaque côté face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: "10+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
