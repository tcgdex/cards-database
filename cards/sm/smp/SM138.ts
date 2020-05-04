import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM138",
	localId: "SM138",

	// Card informations
	name: {
		en: "Zekrom-GX",
		fr: "Zekrom-GX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM138/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM138/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM138/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bullet Uppercut",
			fr: "Uppercut Projeté",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Pokémon-GX or a Pokémon-EX, this attack does 60 more damage. This attack's damage isn't affected by Weakness.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Swift Bolt Strike",
			fr: "Charge Foudre Fulgurante",
		},
		text: {
			en: "Flip 2 coins. This attack does 60 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Rampage Bolt GX",
			fr: "Éclair Saccageur-GX",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
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
