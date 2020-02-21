import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-56",
	localId: 56,

	// Card informations
	name: {
		en: "Unown F",
		fr: "Zarbi F",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/56/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/56/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 500,
		type: AbilityType.POKEPOWER,
		name: {
			en: "FAKE",
			fr: "FAUX",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown F is on your Bench, you may use this power. Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, draw a card.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi F est sur votre Banc, vous pouvez utiliser ce pouvoir. Placez une pièce à côté de votre Pokémon Actif. Ne la montrez pas à votre adversaire et cachez-la avec votre main. Votre adversaire doit deviner si c'est pile ou face. S'il ou elle a tort, piochez une carte.",
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
			en: "You may flip a coin. If tails, this attack does nothing. If heads, this attack's base damage is 30.",
			fr: "Vous pouvez lancer une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, les dégâts de base de cette attaque sont de 30.",
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
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
