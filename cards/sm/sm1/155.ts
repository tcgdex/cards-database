import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-155",
	localId: 155,

	// Card informations
	name: {
		en: "Solgaleo-GX",
		fr: "Solgaleo-GX",
	},

	hp: 250,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/155/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/155/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/155/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/155/high",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1221,
		type: AbilityType.TALENT,
		name: {
			en: "Ultra Road",
			fr: "Ultra-Route",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Sunsteel Strike",
			fr: "Choc Météore",
		},
		text: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 230
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Sol Burst-GX",
			fr: "Éclat Solaire-GX",
		},
		text: {
			en: "Search your deck for up to 5 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 5 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
