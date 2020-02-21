import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-66",
	localId: 66,

	// Card informations
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/66/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/66/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/66/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/66/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Color Pick",
			fr: "Choix de couleur",
		},
		text: {
			en: "Search your deck for up to 3 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 3 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trace",
			fr: "Calque",
		},
		text: {
			en: "Flip a coin. If heads, choose an attack on 1 of your opponent's Benched Pokémon. Trace copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Smeargle performs that attack.",
			fr: "Lancez une pièce. Si c'est face, choisissez une attaque d'1 des Pokémon de Banc de votre adversaire. Calque copie cette attaque, Coût en Énergie excepté. (Vous devez toujours faire ce qu'indique l'attaque.) Queulorior utilise cette attaque.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
