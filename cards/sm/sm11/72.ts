import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-72",
	localId: 72,

	// Card informations
	name: {
		en: "Espeon & Deoxys-GX",
		fr: "Mentali et Deoxys-GX",
	},

	hp: 260,

	type: [
		Type.PSYCHIC,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Club",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Psychic Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Division-GX",
			fr: "Club Psy",
		},
		text: {
			en: "Put 10 damage counters on your opponent's Pokémon in any way you like. If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), put 20 damage counters on them instead. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon Psychic de Banc.",
		},
		damage: "10+"
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Division Croisée-GX",
		},
		text: {
			fr: "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 20 marqueurs de dégâts à la place. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
