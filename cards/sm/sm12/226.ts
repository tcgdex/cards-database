import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-226",
	localId: 226,

	// Card informations
	name: {
		en: "Mega Lopunny & Jigglypuff-GX",
		fr: "Méga-Lockpin et Rondoudou-GX",
	},

	hp: 240,

	type: [
		Type.COLORLESS,
	],

	dexId: 39,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/226/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/226/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/226/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/226/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jumping Balloon",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 60 more damage for each of your opponent's Pokémon-GX and Pokémon-EX in play.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Puffy Smashers-GX",
			fr: "Ballon Bondissant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), this attack does 200 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 60 dégâts supplémentaires pour chacun des Pokémon-GX et Pokémon-EX en jeu de votre adversaire.",
		},
		damage: "60＋"
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Écrasement Rebondi-GX",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 200 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
