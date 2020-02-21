import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/9/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/9/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 209,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Let Loose",
			fr: "Libérer",
		},
		text: {
			en: "Once during your turn, when you put Giratina from your hand onto your Bench, you may use this power. Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)",
			fr: "Une seule fois lors de votre tour, lorsque vous placez Giratina de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque joueur mélange sa main à son deck et pioche jusqu'à 4 cartes. (Vous piochez vos cartes en premier.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Earth Power",
			fr: "Telluriforce",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
