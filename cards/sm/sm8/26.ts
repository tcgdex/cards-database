import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-26",
	localId: 26,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/26/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/26/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/26/high",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Butterfly Edge",
			fr: "Lame Papillon",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
