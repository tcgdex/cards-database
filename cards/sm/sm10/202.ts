import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-202",
	localId: 202,

	// Card informations
	name: {
		en: "Honchkrow-GX",
		fr: "Corboss-GX",
	},

	hp: 210,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/202/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/202/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/202/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/202/high.png",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 140,
		name: "sadaji"
	},

	abilities: [{
		id: 464,
		type: AbilityType.TALENT,
		name: {
			en: "Ruler of the Night",
			fr: "Maître de la Nuit",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Pokémon Tool, Special Energy, or Stadium cards from their hand.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Outil Pokémon, de cartes Énergie spéciale ou de cartes Stade de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Feather Storm",
			fr: "Volée de Plumes",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon-GX and Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon-GX et Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Unfair-GX",
			fr: "Injuste-GX",
		},
		text: {
			en: "Your opponent reveals their hand. Discard 2 cards from it. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire dévoile sa main. Défaussez-en 2 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

