import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM171",
	localId: "SM171",

	// Card informations
	name: {
		en: "Flareon-GX",
		fr: "Pyroli-GX",
	},

	hp: 210,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM171/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM171/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM171/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM171/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Heat Stage",
			fr: "Étape Chaleur",
		},
		text: {
			en: "You may attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Vous pouvez attacher jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Bright Flame",
			fr: "Flamme Éclatante",
		},
		text: {
			en: "Discard 2 Fire Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
		},
		damage: 190
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Power Burner GX",
			fr: "Puissance Brûlante-GX",
		},
		text: {
			en: "This attack does 20 damage for each Fire Energy card in your discard pile. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 20 dégâts pour chaque carte Énergie Fire dans votre pile de défausse. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
