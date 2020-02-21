import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-61",
	localId: 61,

	// Card informations
	name: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/61/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/61/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand Veil",
			fr: "Voile Sable",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to Diglett during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'attaques (y compris les dégâts) infligés à Taupiqueur pendant le prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mini Earthquake",
			fr: "Mini séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
