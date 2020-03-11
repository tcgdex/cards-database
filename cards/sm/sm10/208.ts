import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-208",
	localId: 208,

	// Card informations
	name: {
		en: "Celesteela-GX",
		fr: "Bamboiselle-GX",
	},

	hp: 200,

	type: [
		Type.COLORLESS,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/208/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/208/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/208/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/208/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "aky CG Works",

	abilities: [{
		id: 520,
		type: AbilityType.TALENT,
		name: {
			en: "Force Canceler",
			fr: "Annule Force",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's GX attacks, including damage, done to your Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les effets des attaques GX de votre adversaire, y compris les dégâts, infligés à vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Cyclone",
			fr: "Cyclone d’Énergie",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 110
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Discovery-GX",
			fr: "Découverte-GX",
		},
		text: {
			en: "Count your Prize cards and put them into your hand. Then, take that many cards from the top of your deck and put them face down as your Prize cards. If you don't have that many cards in your deck, this attack does nothing. (You can't use more than 1 GX attack in a game.)",
			fr: "Comptez vos cartes Récompense, puis ajoutez-les à votre main. Prenez alors ce nombre de cartes du dessus de votre deck et placez-les faces cachées comme cartes Récompense. Si vous n’avez pas assez de cartes dans votre deck, cette attaque ne fait rien. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	retreat: 4,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
