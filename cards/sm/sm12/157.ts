import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-157",
	localId: 157,

	// Card informations
	name: {
		en: "Reshiram & Zekrom-GX",
		fr: "Reshiram et Zekrom-GX",
	},

	hp: 270,

	type: [
		Type.DRAGON,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/157/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/157/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/157/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/157/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.LIGHTNING
		],
		name: {
			en: "Fabled Flarebolts",
			fr: "Flamme-Foudre Fabuleuse",
		},
		text: {
			en: "Discard up to 3 in any combination of basic Fire and basic Lightning Energy cards from your Benched Pokémon. This attack does 90 damage for each card you discarded in this way.",
			fr: "Défaussez une combinaison d’un maximum de 3 cartes Énergie Fire de base et Énergie Lightning de base de vos Pokémon de Banc. Cette attaque inflige 90 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: "90×"
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Cross Break-GX",
			fr: "Fracture Croisée-GX",
		},
		text: {
			en: "This attack does 170 damage to 1 of your opponent's Benched Pokémon. If you played N's Resolve from your hand during this turn, this attack also does 170 damage to 1 of your opponent's other Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. Si vous avez joué Résolution de N de votre main pendant ce tour, cette attaque inflige également 170 dégâts à l’un des autres Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		}
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
