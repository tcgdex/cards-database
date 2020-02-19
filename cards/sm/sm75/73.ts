import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-73",
	localId: 73,

	// Card informations
	name: {
		en: "Salamence-GX",
		fr: "Drattak-GX",
	},

	hp: 250,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/73/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/73/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/73/high.png",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 806,
		type: AbilityType.TALENT,
		name: {
			en: "Dragon Lift",
			fr: "Élévation de Dragon",
		},
		text: {
			en: "Your Pokémon in play have no Retreat Cost, except Pokémon-GX and Pokémon-EX.",
			fr: "Vos Pokémon en jeu n’ont pas de Coût de Retraite, à l’exception des Pokémon-GX et des Pokémon-EX.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flame Jet-GX",
			fr: "Jet de Flamme-GX",
		},
		text: {
			en: "This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card

