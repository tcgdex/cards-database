import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-212",
	localId: 212,

	// Card informations
	name: {
		en: "Charizard & Braixen-GX",
		fr: "Dracaufeu et Roussil-GX",
	},

	hp: 270,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/212/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/212/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/212/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/212/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Brilliant Flare",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "You may search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
		},
		damage: 180
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Crimson Flame Pillar-GX",
			fr: "Flamboiement Brillant",
		},
		text: {
			en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), your opponent's Active Pokémon is now Burned and Confused. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez chercher jusqu’à 3 cartes dans votre deck et les ajouter à votre main. Mélangez ensuite votre deck.",
		},
		damage: 180
	},{
		cost: [
			Type.FIRE
		],
		name: {
			fr: "Colonne de Flamme Écarlate-GX",
		},
		text: {
			fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
