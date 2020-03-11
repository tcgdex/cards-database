import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-156",
	localId: 156,

	// Card informations
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 612,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/156/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/156/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/156/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/156/high",
		},
	},

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Anesaki Dynamic",

	abilities: [{
		id: 1399,
		type: AbilityType.TALENT,
		name: {
			en: "Grind Up",
			fr: "Mouture",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard any Stadium card in play. If you do, attach up to 3 in any combination of Fire and Metal Energy cards from your hand to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toute carte Stade en jeu. Dans ce cas, attachez une combinaison d’un maximum de 3 cartes Énergie Fire ou Metal de votre main à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.METAL
		],
		name: {
			en: "Powerful Axe",
			fr: "Hache Puissante",
		},
		text: {
			en: "This attack does 40 more damage times the amount of basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies de base attachées à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
