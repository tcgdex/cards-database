import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-33",
	localId: 33,

	// Card informations
	name: {
		en: "Snorlax",
		fr: "Ronflex Niv. 37",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 143,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/33/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/33/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {
			en: "Pick and Collect",
			fr: "Choisir et collectionner",
		},
		text: {
			en: "Search your discard pile for up to 4 basic Energy cards, show them to your opponent, and put them into your hand.",
			fr: "Choisissez dans votre pile de défausse jusqu'à 4 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Roll Over",
			fr: "Se retourner",
		},
		text: {
			en: "Flip a coin. If heads, both Snorlax and the Defending Pokémon are now Asleep. If tails, Snorlax is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, Ronflex et le Pokémon Défenseur sont maintenant Endormis. Si c'est pile, Ronflex est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
