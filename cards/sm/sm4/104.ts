import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-104",
	localId: 104,

	// Card informations
	name: {
		en: "Buzzwole-GX",
		fr: "Mouscoto-GX",
	},

	hp: 190,

	type: [
		Type.FIGHTING,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Jet Punch",
			fr: "Coup Rapide",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Knuckle Impact",
			fr: "Coup d’Articulations",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Absorption-GX",
			fr: "Expansion-GX",
		},
		text: {
			en: "This attack does 40 damage for each of your remaining Prize cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 40 dégâts pour chacune des cartes Récompense qu'il vous reste. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
