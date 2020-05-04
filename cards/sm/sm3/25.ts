import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-25",
	localId: 25,

	// Card informations
	name: {
		en: "Salazzle-GX",
		fr: "Malamandre-GX",
	},

	hp: 200,

	type: [
		Type.FIRE,
	],

	dexId: 758,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/25/high",
		},
	},

	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Diabolical Claws",
			fr: "Griffes Diaboliques",
		},
		text: {
			en: "This attack does 50 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que vous avez récupérée.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 110
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Queen's Haze-GX",
			fr: "Brume de Reine-GX",
		},
		text: {
			en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
