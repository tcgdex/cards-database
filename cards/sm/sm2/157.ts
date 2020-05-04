import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-157",
	localId: 157,

	// Card informations
	name: {
		en: "Metagross-GX",
		fr: "Métalosse-GX",
	},

	hp: 250,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/157/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/157/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/157/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/157/high",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 642,
		type: AbilityType.TALENT,
		name: {
			en: "Geotech System",
			fr: "Système Géotechnique",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Psychic or Metal Energy card from your discard pile to your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic ou Metal de votre pile de défausse à votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Giga Hammer",
			fr: "Giga Marteau",
		},
		text: {
			en: "This Pokémon can't use Giga Hammer during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Giga Marteau pendant votre prochain tour.",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Algorithm-GX",
			fr: "Algorithme-GX",
		},
		text: {
			en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 5 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
