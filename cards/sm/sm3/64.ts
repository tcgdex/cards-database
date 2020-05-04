import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-64",
	localId: 64,

	// Card informations
	name: {
		en: "Machamp-GX",
		fr: "Mackogneur-GX",
	},

	hp: 250,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/64/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/64/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/64/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Cross-Cut",
			fr: "Coupe Transversale",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bedrock Breaker",
			fr: "Brise Fondation",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 130
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Muscle Punch-GX",
			fr: "Poing Musclé-GX",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
