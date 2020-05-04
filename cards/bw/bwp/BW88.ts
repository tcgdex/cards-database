import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW88",
	localId: "BW88",

	// Card informations
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW88/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW88/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW88/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sand-Attack",
			fr: "Jet de Sable",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Slash",
			fr: "Flamme Tranchante",
		},
		text: {
			en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
			fr: "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
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
