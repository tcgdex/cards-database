import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-92",
	localId: 92,

	// Card informations
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/92/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/92/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/92/high.png",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Vision",
			fr: "Vision Puissante",
		},
		text: {
			en: "Does 10 damage times the number of cards in your opponent's hand.",
			fr: "Inflige 10 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
			fr: "Vol",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 50
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
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

