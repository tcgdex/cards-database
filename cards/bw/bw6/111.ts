import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-111",
	localId: 111,

	// Card informations
	name: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 627,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/111/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/111/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chirp",
			fr: "Gazouillis",
		},
		text: {
			en: "Search your deck for 2 Pokémon with Fighting Resistance, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 2 Pokémon avec une Résistance à Fighting, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Beak",
			fr: "Bec Aiguisé",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 10
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

