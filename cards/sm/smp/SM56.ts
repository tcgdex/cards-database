import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM56",
	localId: "SM56",

	// Card informations
	name: {
		en: "Tsareena-GX",
		fr: "Sucreine-GX",
	},

	hp: 230,

	type: [
		Type.GRASS,
	],

	dexId: 763,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM56/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM56/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM56/high.png",
		},
	},

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Side Eye",
			fr: "Regard de Travers",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jumping Side Kick",
			fr: "Coup Latéral Sauté",
		},
		text: {
			en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Queen's Command-GX",
			fr: "Ordre de la Reine-GX",
		},
		text: {
			en: "Your opponent discards 4 cards from their hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire défausse 4 cartes de sa main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card

