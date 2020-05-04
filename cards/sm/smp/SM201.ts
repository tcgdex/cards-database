import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM201",
	localId: "SM201",

	// Card informations
	name: {
		en: "Reshiram & Charizard-GX",
		fr: "Reshiram et Dracaufeu-GX",
	},

	hp: 270,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM201/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM201/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM201/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM201/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
		Tag.BASIC,
	],

	illustrator: "Ryota Murayama",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Outrage",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Strike",
			fr: "Colère",
		},
		text: {
			en: "This Pokémon can't use Flare Strike during your next turn.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 230
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Double Blaze GX",
			fr: "Attaque Flamboyante",
		},
		text: {
			en: "If this Pokémon has at least 3 extra {R} Energy attached to it (in addition to this attack's cost), this attack does 100 more damage, and this attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Ce Pokémon ne peut pas utiliser Attaque Flamboyante pendant votre prochain tour.",
		},
		damage: 200
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			fr: "Double Brasier-GX",
		},
		text: {
			fr: "Si au moins 3 Énergies Fire supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires, et les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: "200+"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
