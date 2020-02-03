import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-214",
	localId: 214,

	// Card informations
	name: {
		en: "Blastoise & Piplup-GX",
		fr: "Tortank et Tiplouf-GX",
	},

	hp: 270,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/214/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/214/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/214/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/214/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Splash Maker",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "You may attach up to 3 Water Energy cards from your hand to your Pokémon in any way you like. If you do, heal 50 damage from those Pokémon for each card you attached to them in this way.",
		},
		damage: 150
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bubble Launcher-GX",
			fr: "Faiseur de Vagues",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed. If this Pokémon has at least 3 extra Water Energy attached to it (in addition to this attack's cost), this attack does 150 more damage. (You can't use more than 1 GX attack in a game.)",
			fr: "Vous pouvez attacher jusqu’à 3 cartes Énergie Water de votre main à vos Pokémon, de la manière que vous voulez. Dans ce cas, soignez 50 dégâts à ces Pokémon pour chaque carte qui leur est attachée de cette façon.",
		},
		damage: 100
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			fr: "Lance-Bulles-GX",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Si au moins 3 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 150 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: "100+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

