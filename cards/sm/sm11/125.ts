import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-125",
	localId: 125,

	// Card informations
	name: {
		en: "Umbreon & Darkrai-GX",
		fr: "Noctali et Darkrai-GX",
	},

	hp: 270,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/125/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/125/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Lance",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-GX or Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dark Moon-GX",
			fr: "Lance Noire",
		},
		text: {
			en: "Your opponent can't play any Trainer cards from their hand during their next turn. If this Pokémon has at least 5 extra Darkness Energy attached to it (in addition to this attack's cost), your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon-GX ou Pokémon-EX de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Lune Sombre-GX",
		},
		text: {
			fr: "Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour. Si au moins 5 Énergies Darkness supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), le Pokémon Actif de votre adversaire est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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

