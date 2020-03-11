import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-1",
	localId: 1,

	// Card informations
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/1/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/1/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/1/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 439,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Freezing Screech",
			fr: "Hurlement glaçant",
		},
		text: {
			en: "Once during your turn, when you put Articuno from your hand onto your Bench, you may flip a coin. If heads, choose 1 of the Defending Pokémon. That Pokémon is now Paralyzed.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Arktos de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon Défenseurs. Ce Pokémon est maintenant Paralysé.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Blizzard",
			fr: "Blizzard",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. Si c'est pile, cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
