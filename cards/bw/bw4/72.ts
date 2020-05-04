import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-72",
	localId: 72,

	// Card informations
	name: {
		en: "Shiftry",
		fr: "Tengalice",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/72/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/72/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/72/high",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "match",

	abilities: [{
		id: 1436,
		type: AbilityType.TALENT,
		name: {
			en: "Giant Fan",
			fr: "Éventail Géant",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, choose 1 of your opponent's Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into his or her deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, choisissez 1 des Pokémon de votre adversaire. Votre adversaire mélange le Pokémon choisi et toutes les cartes qui lui sont attachées avec son deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
