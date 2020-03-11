import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-83",
	localId: 83,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/83/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/83/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/83/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Deafen",
			fr: "Rendre Sourd",
		},
		text: {
			en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
			fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Healwing",
			fr: "Aile Soin",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
