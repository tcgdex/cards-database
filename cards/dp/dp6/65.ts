import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-65",
	localId: 65,

	// Card informations
	name: {
		en: "Metang",
		fr: "Metang",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/65/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/65/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/65/high.png",
		},
	},

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Psyshock",
			fr: "Choc psy",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bullet Punch",
			fr: "Pisto-Poing",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage plus 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

