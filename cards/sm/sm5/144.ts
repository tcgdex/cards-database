import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-144",
	localId: 144,

	// Card informations
	name: {
		en: "Celesteela-GX",
		fr: "Bamboiselle-GX",
	},

	hp: 200,

	type: [
		Type.METAL,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rocket Fall",
			fr: "Chute Propulsée",
		},
		text: {
			en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Press",
			fr: "Pression Lunaire",
		},
		damage: 130
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blaster-GX",
			fr: "Réacteur-GX",
		},
		text: {
			en: "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) (You can't use more than 1 GX attack in a game.)",
			fr: "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
