import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-25",
	localId: 25,

	// Card informations
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},

	hp: 160,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/25/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/25/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/25/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/25/high",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 1277,
		type: AbilityType.TALENT,
		name: {
			en: "Powerful Squall",
			fr: "Rafale Massive",
		},
		text: {
			en: "Once during your turn (before your attack), you may look at the top 6 cards of your deck and attach any number of Water Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 6 cartes du dessus de votre deck et attacher autant de cartes Énergie Water que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Hydro Tackle",
			fr: "Hydro-Charge",
		},
		text: {
			en: "This Pokémon does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige 30 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
