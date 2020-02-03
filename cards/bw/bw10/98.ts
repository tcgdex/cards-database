import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-98",
	localId: 98,

	// Card informations
	name: {
		en: "Jirachi-EX",
		fr: "Jirachi ex",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/98/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/98/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 923,
		type: AbilityType.TALENT,
		name: {
			en: "Stellar Guidance",
			fr: "Bonne Étoile",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hypnostrike",
			fr: "Choc Sommeil",
		},
		text: {
			en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
			fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

