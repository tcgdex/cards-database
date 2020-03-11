import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-226",
	localId: 226,

	// Card informations
	name: {
		en: "Mega Sableye & Tyranitar-GX",
		fr: "Méga-Ténéfix et Tyranocif-GX",
	},

	hp: 280,

	type: [
		Type.DARKNESS,
	],

	dexId: 248,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/226/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/226/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/226/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/226/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Greedy Crush",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "If your opponent's Pokémon-GX or Pokémon-EX is Knocked Out by damage from this attack, take 1 more Prize card.",
		},
		damage: 210
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Gigafall-GX",
			fr: "Écrasement Avare",
		},
		text: {
			en: "If this Pokémon has at least 5 extra Energy attached to it (in addition to this attack's cost), discard the top 15 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon-GX ou Pokémon-EX de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
		},
		damage: 250
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			fr: "Chute Giga-GX",
		},
		text: {
			fr: "Si au moins 5 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez les 15 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 250
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
