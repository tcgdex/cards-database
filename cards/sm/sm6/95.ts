import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-95",
	localId: 95,

	// Card informations
	name: {
		en: "Ultra Necrozma-GX",
		fr: "Ultra-Necrozma-GX",
	},

	hp: 190,

	type: [
		Type.DRAGON,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Photon Geyser",
			fr: "Photo-Geyser",
		},
		text: {
			en: "Discard all basic Psychic Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Psychic de base de ce Pokémon. Cette attaque inflige 80 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Sky-Scorching Light-GX",
			fr: "Lumière Apocalyptique-GX",
		},
		text: {
			en: "You can use this attack only if the total of both players' remaining Prize cards is 6 or less. Put 6 damage counters on each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous ne pouvez utiliser cette attaque que s’il reste un total de 6 cartes Récompense ou moins aux deux joueurs. Placez 6 marqueurs de dégâts sur chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
