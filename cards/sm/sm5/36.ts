import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-36",
	localId: 36,

	// Card informations
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 419,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/36/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/36/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/36/high",
		},
	},

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Blast",
			fr: "Explosion Aquatique",
		},
		text: {
			en: "Discard a Water Energy from this Pokémon.",
			fr: "Défaussez une Énergie Water de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
