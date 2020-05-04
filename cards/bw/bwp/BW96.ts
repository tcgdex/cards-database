import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW96",
	localId: "BW96",

	// Card informations
	name: {
		en: "Tornadus-EX",
		fr: "Boréas ex",
	},

	hp: 170,

	type: [
		Type.COLORLESS,
	],

	dexId: 641,


	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blow Through",
			fr: "Grosse Bourrasque",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 30 more damage.",
			fr: "S'il y a une carte Stade en jeu, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
		},
		text: {
			en: "Flip a coin. If tails, discard an Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 100
	},{
		name: {
			en: "Pokémon EX Rule",
			fr: "Règle pour les Pokémon ex",
		},
		text: {
			en: "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.",
			fr: "Lorsqu'un Pokémon-EX est mis K.O., l'adversaire récupère 2 cartes Récompense.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
