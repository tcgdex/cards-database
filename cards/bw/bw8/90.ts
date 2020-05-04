import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-90",
	localId: 90,

	// Card informations
	name: {
		en: "Klinklang",
		fr: "Cliticlic",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 601,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/90/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/90/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/90/high",
		},
	},

	evolveFrom: {
		en: "Klang",
		fr: "Clic",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 567,
		type: AbilityType.TALENT,
		name: {
			en: "Plasma Steel",
			fr: "Acier Plasma",
		},
		text: {
			en: "Prevent all damage done to your Metal Pokémon by attacks from your opponent's Pokémon-EX.",
			fr: "Évitez tous les dégâts infligés à vos Pokémon Metal par des attaques des Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Bullet",
			fr: "Projectile Lourd",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
