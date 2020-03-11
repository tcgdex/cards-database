import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-191",
	localId: 191,

	// Card informations
	name: {
		en: "Pheromosa & Buzzwole-GX",
		fr: "Cancrelove et Mouscoto-GX",
	},

	hp: 260,

	type: [
		Type.GRASS,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/191/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/191/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/191/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/191/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "aky CG Works",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Jet Punch",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Elegant Sole",
			fr: "Coup Rapide",
		},
		text: {
			en: "During your next turn, this Pokémon's Elegant Sole attack's base damage is 60.",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 190
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Beast Game-GX",
			fr: "Semelle Élégante",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card. If this Pokémon has at least 7 extra Energy attached to it (in addition to this attack's cost), take 3 more Prize cards instead. (You can't use more than 1 GX attack in a game.)",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Semelle Élégante de ce Pokémon sont de 60.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS
		],
		name: {
			fr: "Jeu Chimérique-GX",
		},
		text: {
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire. Si au moins 7 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 3 cartes Récompense supplémentaires au lieu d’une. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
