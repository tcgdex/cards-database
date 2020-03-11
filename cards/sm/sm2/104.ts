import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-104",
	localId: 104,

	// Card informations
	name: {
		en: "Swellow",
		fr: "Hélédelle",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 277,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/104/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/104/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/104/high",
		},
	},

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swallow Dive",
			fr: "Plongeon d’Hirondelle",
		},
		text: {
			en: "If this Pokémon used Agility during your last turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a utilisé Hâte pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 40
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
