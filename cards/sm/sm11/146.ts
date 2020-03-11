import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-146",
	localId: 146,

	// Card informations
	name: {
		en: "Garchomp & Giratina-GX",
		fr: "Carchacrok et Giratina-GX",
	},

	hp: 270,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Linear Attack",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Calamitous Slash",
			fr: "Attaque Linéaire",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
			fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 160
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.FIGHTING
		],
		name: {
			en: "GG End-GX",
			fr: "Calami’Tranche",
		},
		text: {
			en: "Discard 1 of your opponent's Pokémon and all cards attached to it. If this Pokémon has at least 3 extra Fighting Energy attached to it (in addition to this attack's cost), discard 2 of your opponent's Pokémon instead. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: "160+"
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.FIGHTING
		],
		name: {
			fr: "GG Final-GX",
		},
		text: {
			fr: "Défaussez l’un des Pokémon de votre adversaire et toutes les cartes qui lui sont attachées. Si au moins 3 Énergies Fighting supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez 2 des Pokémon de votre adversaire au lieu d’un. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
