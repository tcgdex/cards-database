import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM34",
	localId: "SM34",

	// Card informations
	name: {
		en: "Bewear-GX",
		fr: "Chelours-GX",
	},

	hp: 210,

	type: [
		Type.COLORLESS,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM34/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM34/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM34/high",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bear Hug",
			fr: "Câlin d’Ours",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Impact",
			fr: "Double Impact",
		},
		text: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 100
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Throw-GX",
			fr: "Grand Lancer-GX",
		},
		text: {
			en: "Discard your opponent's Active Pokémon and all cards attached to it. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
