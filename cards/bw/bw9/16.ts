import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-16",
	localId: 16,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/16/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/16/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/16/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1423,
		type: AbilityType.TALENT,
		name: {
			en: "Flare Navigate",
			fr: "Navigation Flamboyante",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Énergie Fire dans votre deck et l'attacher à 1 de vos Pokémon. Dans ce cas, placez 1 marqueur de dégâts sur le Pokémon auquel l'Énergie a été attachée. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Absorb Life",
			fr: "Absorption",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
