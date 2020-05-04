import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-12",
	localId: 12,

	// Card informations
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 272,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/12/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/12/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/12/high",
		},
	},

	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1300,
		type: AbilityType.TALENT,
		name: {
			en: "Captivating Rhythm",
			fr: "Rythme Envoûtant",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Ray",
			fr: "Rayonnement Solaire",
		},
		text: {
			en: "Heal 20 damage from each of your Pokémon.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
