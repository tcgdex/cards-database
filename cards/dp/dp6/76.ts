import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-76",
	localId: 76,

	// Card informations
	name: {
		en: "Unown J",
		fr: "Zarbi J",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/76/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/76/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},

	abilities: [{
		id: 602,
		type: AbilityType.POKEPOWER,
		name: {
			en: "JUNK",
			fr: "JUNK",
		},
		text: {
			en: "Once during your turn, when you put Unown J from your hand onto your Bench, you may flip a coin. If heads, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Zarbi J de votre main sur votre Banc, vous pouvez lancer une pièce. Si c'est face, choisissez dans votre pile de défausse une carte Dresseur, montrez-la à votre adversaire et placez-la dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Remove the Special Condition Asleep from the Defending Pokémon.",
			fr: "Retirez au Pokémon Défenseur l'État Spécial Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

