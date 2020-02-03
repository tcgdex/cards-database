import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-98",
	localId: 98,

	// Card informations
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 782,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/98/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/98/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 1150,
		type: AbilityType.TALENT,
		name: {
			en: "Bulletproof",
			fr: "Pare-Balles",
		},
		text: {
			en: "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques(après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

