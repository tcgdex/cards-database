import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-133",
	localId: 133,

	// Card informations
	name: {
		en: "Cobalion-EX",
		fr: "Cobaltium-EX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 638,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/133/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/133/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Righteous Edge",
			fr: "Lame Vertueuse",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Steel Bullet",
			fr: "Balle d'Acier",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
