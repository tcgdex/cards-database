import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-13",
	localId: 13,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice Niv. 55",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/13/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/13/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/13/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 355,
		type: AbilityType.POKEBODY,
		name: {
			en: "Unlucky Wind",
			fr: "Vent malchanceux",
		},
		text: {
			en: "As long as Shiftry is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
			fr: "Tant que Tengalice est votre Pokémon Actif, lorsque votre adversaire lance une pièce lors de son tour, considérez que c'est pile.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Conform",
			fr: "Se conformer",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, the Defending Pokémon is now Confused.",
			fr: "Si vous possédez le même nombre de cartes en main que votre adversaire, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 40
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seal Off",
			fr: "Interdire d'accès",
		},
		text: {
			en: "The Defending Pokémon can't use any Poké-Powers or Poké-Bodies during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas utiliser de Poké-Powers ou de Poké-Bodies lors du prochain tour de votre adversaire.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
