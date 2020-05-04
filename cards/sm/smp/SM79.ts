import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM79",
	localId: "SM79",

	// Card informations
	name: {
		en: "Shining Celebi",
		fr: "Celebi Brillant",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM79/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM79/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",

	abilities: [{
		id: 302,
		type: AbilityType.TALENT,
		name: {
			en: "Time Recall",
			fr: "Rappel Temporel",
		},
		text: {
			en: "Each of your evolved Pokémon can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)",
			fr: "Chacun de vos Pokémon évolués peut utiliser les attaques de ses précédentes Évolutions. (Vous avez toujours besoin de l’Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Step",
			fr: "Enjambée de Feuillage",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
