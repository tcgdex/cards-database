import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-124",
	localId: 124,

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/124/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/124/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 852,
		type: AbilityType.POKEBODY,
		name: {
			en: "Invisible Tentacles",
			fr: "Tentacules invisibles",
		},
		text: {
			en: "Whenever your opponent's Pokémon tries to attack, your opponent discards 1 card from his or her hand. (If your opponent can't discard 1 card, your opponent's Pokémon can't attack.) You can't use more than 1 Invisible Tentacles Poké-Body each turn.",
			fr: "Lorsqu'1 des Pokémon de votre adversaire essaye d'attaquer, votre adversaire défausse 1 carte de sa main. ( Si votre adversaire ne peut pas défausser de carte, le Pokémon de votre adversaire ne peut pas attaquer.) Vous ne pouvez pas utiliser plus d'1 Poké-Body Tentacules invisibles par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Lost",
			fr: "Obscurité perdue",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si les dégâts de cette attaque mettent K.O 1 des Pokémon de votre adversaire, placez ce Pokémon ainsi que toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
		},
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

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
