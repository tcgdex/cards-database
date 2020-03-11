import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-258",
	localId: 258,

	// Card informations
	name: {
		en: "Arceus & Dialga & Palkia-GX",
		fr: "Arceus, Dialga et Palkia-GX",
	},

	hp: 280,

	type: [
		Type.DRAGON,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/258/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/258/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/258/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/258/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.METAL,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ultimate Ray",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
		},
		damage: 150
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Altered Creation GX",
			fr: "Rayon Ultime",
		},
		text: {
			en: "For the rest of this game, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). If this Pokémon has at least 1 extra {W} Energy attached to it (in addition to this attack's cost), when your opponent's Active Pokémon is Knocked Out by damage from those attacks, take 1 more Prize card. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
		damage: 150
	},{
		cost: [
			Type.METAL
		],
		name: {
			fr: "Création Altérée-GX",
		},
		text: {
			fr: "Pour le reste de cette partie, les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Si au moins une Énergie Water supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), lorsque le Pokémon Actif de votre adversaire est mis K.O. par les dégâts de ces attaques, récupérez une carte Récompense supplémentaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
