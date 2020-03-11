import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-8",
	localId: 8,

	// Card informations
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/8/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/8/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/8/high",
		},
	},

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Retribution",
			fr: "Rétribution",
		},
		text: {
			en: "If an Escavalier you had in play was Knocked Out by damage from an opponent's attack during his or her last turn, put all Energy attached to the Defending Pokémon into your opponent's hand.",
			fr: "Si un Lançargot que vous aviez en jeu a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, mettez toutes les Énergies attachées au Pokémon Défenseur dans la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Signal Beam",
			fr: "Rayon signal",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
