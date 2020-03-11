import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM10",
	localId: "SM10",

	// Card informations
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 756,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM10/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM10/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM10/high",
		},
	},

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",

	abilities: [{
		id: 1222,
		type: AbilityType.TALENT,
		name: {
			en: "Illuminate",
			fr: "Lumiattirance",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Flickering Spores",
			fr: "Spores Scintillantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
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
