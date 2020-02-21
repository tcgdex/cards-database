import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Krookodile",
		fr: "Crocorible",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 553,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/65/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/65/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/65/high",
		},
	},

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Torment",
			fr: "Tourmente",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon Défenseur ne pourra pas l'utiliser lors du prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Krookoroll",
			fr: "Crocoroulade",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
