import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Pelipper",
		fr: "Bekipan",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/38/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Courier",
			fr: "Coursier",
		},
		text: {
			en: "Put 1 of your Benched Pokémon and all cards attached to it into your hand.",
			fr: "Placez l'un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées dans votre main.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
			fr: "Vol",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
